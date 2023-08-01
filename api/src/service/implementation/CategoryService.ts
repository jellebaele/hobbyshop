import { FilterQuery, isValidObjectId, QueryOptions } from 'mongoose';
import { QUERY_MAX_PER_PAGE } from '../../config';
import InternalServerError from '../../error/implementations/InternalServerError';
import CategoryModel, {
  ICategoryDocument,
  ICategoryDto,
} from '../../models/Category';
import BaseService from '../BaseService';

export default class CategoryService extends BaseService<ICategoryDocument> {
  public async createCategorie(
    categoryDto: ICategoryDto
  ): Promise<ICategoryDocument> {
    return this.createDocument(categoryDto);
  }

  public async getCategory(
    filterQuery: FilterQuery<ICategoryDto>,
    options: QueryOptions = {}
  ): Promise<ICategoryDocument | null> {
    return this.getDocument(filterQuery, options);
  }

  public async getCategoryById(id: string): Promise<ICategoryDocument | null> {
    return this.getDocumentById(id);
  }

  public async getCategories(
    query: FilterQuery<ICategoryDto>,
    pageNumber: number,
    perPage: number
  ): Promise<(ICategoryDocument | null)[]> {
    console.log(query);
    return this.getDocuments(query, pageNumber, perPage);
  }
}
