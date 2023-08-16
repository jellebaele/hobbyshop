import ProductModel from '../models/Product';
import UserModel from '../models/User';
import { categoryRepository, productRepository, userRepository } from '../persistence';
import { AuthService } from './implementation/AuthService';
import { CategoryService } from './implementation/CategoryService';
import { ProductService } from './implementation/ProductService';
import { UserService } from './implementation/UserService';
export { AuthService } from './implementation/AuthService';
export { CategoryService } from './implementation/CategoryService';
export { ProductService } from './implementation/ProductService';

export const authService = new AuthService();
export const categoryService = new CategoryService(categoryRepository);
export const productService = new ProductService(productRepository);
export const userService = new UserService(userRepository);
