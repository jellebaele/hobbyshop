import { UpdateQuery } from 'mongoose';
import { NotFoundError } from '../error';
import { BaseRepository } from '../persistence/BaseRepository';
import { IPaginationData } from '../utils/Pagination';

export abstract class BService<T, U> {
  protected readonly _repository: BaseRepository<T, U>;

  constructor(repo: BaseRepository<T, U>) {
    this._repository = repo;
  }

  abstract create(dto: U): Promise<T>;

  public async getById(id: string): Promise<T> {
    const category = await this._repository.getById(id);
    if (!category) throw new NotFoundError();

    return category;
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
    const documents = await this._repository.getAllByQuery(query);
    if (!documents || documents.length < 1) throw new NotFoundError();

    return documents;
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
}
