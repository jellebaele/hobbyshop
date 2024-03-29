import { FilterQuery } from 'mongoose';
import { NotFoundError } from '../error';
import { BaseRepository } from '../persistence/BaseRepository';
import { IPaginationData } from '../utils/Pagination';

export abstract class BaseService<T, U> {
  protected readonly _repository: BaseRepository<T, U>;

  constructor(repo: BaseRepository<T, U>) {
    this._repository = repo;
  }

  abstract create(dto: U): Promise<T>;

  public async getById(id: string): Promise<T> {
    const document = await this._repository.getById(id);
    if (!document) throw new NotFoundError();

    return document;
  }

  public async getMultipleById(ids: string[], paginationData: IPaginationData): Promise<T[]> {
    return await this._repository.getMultipleById(ids, paginationData);
  }

  public async getPartByQuery(
    query: object,
    paginationData: IPaginationData
  ): Promise<(T | null)[]> {
    const documents = await this._repository.getByQuery(query, paginationData);
    if (!documents || documents.length < 1) throw new NotFoundError();

    return documents;
  }

  protected async getAllByQuery(query: object): Promise<(T | null)[]> {
    return await this._repository.getAllByQuery(query);
  }

  public async update(id: string, dto: any): Promise<T | null> {
    const found = await this._repository.getById(id);
    if (!found) throw new NotFoundError();

    return await this._repository.updateById(id, dto, {
      lean: true,
    });
  }

  public async deleteById(id: string): Promise<void> {
    const found = await this._repository.getById(id);
    if (!found) throw new NotFoundError();

    await this._repository.deleteById(id);
  }

  public async count(query?: object): Promise<number> {
    return await this._repository.count(query);
  }

  public async isUnique(query: FilterQuery<T>): Promise<boolean> {
    const queryArray = Object.keys(query).map((key) => {
      return { [key]: query[key] };
    });

    const existingDocuments = await this.getAllByQuery({
      $or: queryArray,
    });

    return existingDocuments.length > 0 ? false : true;
  }
}
