import { Document, FilterQuery, Model, QueryOptions, isValidObjectId } from 'mongoose';
import { QUERY_MAX_PER_PAGE } from '../config';
import { InternalServerError } from '../error';

export default abstract class BaseService<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(dto: Object): Promise<T> {
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

  public async getByQuery(
    query: FilterQuery<T>,
    pageNumber: number,
    perPage: number
  ): Promise<(T | null)[]> {
    if (perPage > +QUERY_MAX_PER_PAGE) perPage = parseInt(QUERY_MAX_PER_PAGE as string);

    const documents = await this._model
      .find<T>({ ...query })
      .limit(perPage)
      .skip(perPage * (pageNumber - 1));

    return documents;
  }

  public async updateById(
    id: string,
    query: FilterQuery<T>,
    options: QueryOptions<unknown>
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
