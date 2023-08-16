export interface IRepository<T, U> {
  create(dto: T): Promise<U>;
  getById(id: string): Promise<U | null>;
  getOneByQuery(filterQuery: object, options?: object): Promise<U | null>;
  getByQuery(query: object): Promise<U[]>;
  updateById(id: string, dto: T): Promise<U | null>;
  deleteById(id: string): Promise<void>;
}
