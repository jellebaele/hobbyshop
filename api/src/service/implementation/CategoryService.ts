import { FilterQuery, QueryOptions } from 'mongoose';
import { ICategoryDocument, ICategoryDto } from '../../models/Category';
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
    return this.getDocuments(query, pageNumber, perPage);
  }

  public async updateCategoryById(
    id: string,
    query: FilterQuery<ICategoryDto>,
    options: QueryOptions<unknown>
  ): Promise<ICategoryDocument | null> {
    return this.updateDocumentById(id, query, options);
  }

  public async deleteCategoryById(id: string) {
    return this.deleteDocumentById(id);
  }
}
