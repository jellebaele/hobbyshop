import CategoryModel from '../models/Category';
import ProductModel from '../models/Product';
import UserModel from '../models/User';
import { AuthService } from './implementation/AuthService';
import { CategoryService } from './implementation/CategoryService';
import { ProductService } from './implementation/ProductService';
import { UserService } from './implementation/UserService';

export { AuthService } from './implementation/AuthService';
export { CategoryService } from './implementation/CategoryService';
export { ProductService } from './implementation/ProductService';
export { UserService } from './implementation/UserService';

export const authService = new AuthService();
export const categoryService = new CategoryService(CategoryModel);
export const productService = new ProductService(ProductModel);
export const userService = new UserService(UserModel);
