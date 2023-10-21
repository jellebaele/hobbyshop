import { IProductDocument, IProductDto } from '../../models/Product';
import { BaseRepository } from '../BaseRepository';

export default class ProductRepository extends BaseRepository<IProductDocument, IProductDto> {}
