import { IProductDocument, IProductDto } from '../../models/Product';
import { BaseRepository } from '../BaseRepository';

export class ProductRepository extends BaseRepository<IProductDocument, IProductDto> {}
