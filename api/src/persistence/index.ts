import CategoryModel from '../models/Category';
import ProductModel from '../models/Product';
import { CategoryRepository } from './implementation/CategoryRepository';
import { ProductRepository } from './implementation/ProductRepository';

export const categoryRepository = new CategoryRepository(CategoryModel);
export const productRepository = new ProductRepository(ProductModel);
