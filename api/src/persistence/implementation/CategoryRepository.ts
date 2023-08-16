import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import { BaseRepository } from '../BaseRepository';

export default class CategoryRepository extends BaseRepository<ICategoryDocument, ICategoryDto> {}
