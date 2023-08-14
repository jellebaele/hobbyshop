import CategoryModel from '../models/Category';
import ProductModel from '../models/Product';
import UserModel from '../models/User';
import { CategoryService } from './implementation/CategoryService';
import { ProductService } from './implementation/ProductService';
import { UserService } from './implementation/UserService';

export { CategoryService } from './implementation/CategoryService';
export { ProductService } from './implementation/ProductService';
export { UserService } from './implementation/UserService';

export * from './implementation/AuthService';
export const categoryService = new CategoryService(CategoryModel);
export const productService = new ProductService(ProductModel);
export const userService = new UserService(UserModel);
