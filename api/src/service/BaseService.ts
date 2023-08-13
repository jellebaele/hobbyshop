import { FilterQuery, Model, QueryOptions, isValidObjectId } from 'mongoose';
import InternalServerError from '../error/implementations/InternalServerError';
import { QUERY_MAX_PER_PAGE } from '../config';

export default abstract class BaseService<T extends Document> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  protected async createDocument(dto: Object): Promise<T> {
    const newDocument = await new this._model({ ...dto }).save();

    if (!newDocument) {
      throw new InternalServerError(
        `Something went wrong. ${this._model.modelName} is not created.`
      );
    }

    return newDocument;
  }

  protected async getDocument(
    filterQuery: FilterQuery<T>,
    options: QueryOptions = {}
  ): Promise<T | null> {
    return await this._model.findOne<T>(filterQuery, {}, options);
  }

  protected async getDocumentById(id: string): Promise<T | null> {
    if (isValidObjectId(id)) return await this.getDocument({ _id: id });
    else return null;
  }

  protected async getDocuments(
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

  protected async updateDocumentById(
    id: string,
    query: FilterQuery<T>,
    options: QueryOptions<unknown>
  ): Promise<T | null> {
    return await this._model.findByIdAndUpdate({ _id: id }, query, {
      ...options,
      new: true,
    });
  }

  protected async deleteDocumentById(id: string) {
    return this._model.deleteOne({ _id: id });
  }

  public async count(query?: FilterQuery<T>): Promise<number> {
    if (query) return this._model.count(query);
    return this._model.countDocuments();
  }
}
