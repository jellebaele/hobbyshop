import Joi from 'joi';
import { ProductStatus } from '../../../utils/enums';

const limit = Joi.number().min(1).max(50);
const productIdOptional = Joi.string().min(3).max(128);
const productIdRequired = productIdOptional.required();
const nameOptional = Joi.string().min(3).max(128).trim();
const nameRequired = nameOptional.required();
const description = Joi.string().max(256).trim();
const category = Joi.string().min(1).max(128).trim().default('onbekend');
const amount = Joi.number().min(0).default(0);
const unit = Joi.string().min(1).required();
const status = Joi.string()
  .min(1)
  .default('unavailable')
  .valid(...Object.values(ProductStatus));
const userId = Joi.string().min(3).max(128);

export const createProductSchema = Joi.object({
  name: nameRequired,
  description,
  category,
  amount,
  unit,
  status,
});

export const getProductByIdSchema = Joi.object({
  productId: productIdRequired,
});
export const updateProductByIdSchema = Joi.object({
  productId: productIdRequired,
});
export const deleteProductByIdSchema = Joi.object({
  productId: productIdRequired,
});

export const getProductsSchema = Joi.object({
  productId: productIdOptional,
  name: nameOptional,
  description,
  user: userId,
  limit,
  category,
  status,
});
