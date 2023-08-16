import CategoryModel from '../models/Category';
import ProductModel from '../models/Product';
import UserModel from '../models/User';
import CategoryRepository from './implementation/CategoryRepository';
import ProductRepository from './implementation/ProductRepository';
import UserRepository from './implementation/UserRepository';

export const categoryRepository = new CategoryRepository(CategoryModel);
export const productRepository = new ProductRepository(ProductModel);
export const userRepository = new UserRepository(UserModel);
