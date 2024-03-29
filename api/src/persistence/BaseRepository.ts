import { FilterQuery, Model, QueryOptions, UpdateQuery, isValidObjectId } from 'mongoose';
import { QUERY_MAX_PER_PAGE } from '../config';
import { InternalServerError } from '../error';
import { IPaginationData } from '../utils/Pagination';

export abstract class BaseRepository<T, U> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(dto: U): Promise<T> {
    const newDocument = await new this._model({ ...dto }).save();

    if (!newDocument) {
      throw new InternalServerError(
        `Something went wrong. ${this._model.modelName} is not created.`
      );
    }

    // Mappers!!!!!
    return newDocument as T;
  }

  public async getOneByQuery(
    filterQuery: FilterQuery<T>,
    options: QueryOptions = {}
  ): Promise<T | null> {
    return await this._model.findOne<T>(filterQuery, {}, options);
  }

  public async getById(id: string): Promise<T | null> {
    if (isValidObjectId(id)) return await this.getOneByQuery({ _id: id });
    else return null;
  }

  public async getMultipleById(ids: string[], paginationData: IPaginationData): Promise<T[]> {
    let { pageNumber, perPage } = paginationData;
    if (perPage > +QUERY_MAX_PER_PAGE) perPage = parseInt(QUERY_MAX_PER_PAGE as string);

    const records = await this._model
      .find<T>({
        _id: { $in: ids },
      })
      .limit(perPage)
      .skip(perPage * (pageNumber - 1));

    return records;
  }

  public async getByQuery(
    query: FilterQuery<T>,
    paginationData: IPaginationData
  ): Promise<(T | null)[]> {
    let { pageNumber, perPage } = paginationData;
    if (perPage > +QUERY_MAX_PER_PAGE) perPage = parseInt(QUERY_MAX_PER_PAGE as string);

    const documents = await this._model
      .find<T>({ ...query })
      .limit(perPage)
      .skip(perPage * (pageNumber - 1));

    return documents;
  }

  public async getAllByQuery(query: FilterQuery<T>): Promise<T[]> {
    return await this._model.find<T>({ ...query });
  }

  public async updateById(
    id: string,
    query: UpdateQuery<T>,
    options: QueryOptions<unknown> = {}
  ): Promise<T | null> {
    return await this._model.findByIdAndUpdate({ _id: id }, query, {
      ...options,
      new: true,
    });
  }

  public async deleteById(id: string) {
    return this._model.deleteOne({ _id: id });
  }

  public async count(query?: FilterQuery<T>): Promise<number> {
    if (query) return this._model.count(query);
    return this._model.countDocuments();
  }
}
