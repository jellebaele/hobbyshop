import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import { BaseRepository } from '../BaseRepository';

export class CategoryRepository extends BaseRepository<ICategoryDocument, ICategoryDto> {}
