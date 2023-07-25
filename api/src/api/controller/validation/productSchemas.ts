import Joi from 'joi';
import { ProductStatus } from '../../../utils/enums';
import { QUERY_MAX_PER_PAGE } from '../../../config';

const page = Joi.number().min(1);
const perPage = Joi.number().min(1).max(+QUERY_MAX_PER_PAGE);
const productId = Joi.string().min(3).max(128).required();
const name = Joi.string().min(3).max(128).trim().required();
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
  name,
  description,
  category,
  amount,
  unit,
  status,
});

export const getProductByIdSchema = Joi.object({
  productId,
});
export const updateProductByIdSchema = Joi.object().keys({
  productId,
  name: name.optional(),
  description,
  category,
  amount,
  unit: unit.optional(),
  status,
  userId,
});
export const deleteProductByIdSchema = Joi.object({
  productId,
});

export const getProductsSchema = Joi.object().keys({
  productId: productId.optional(),
  name: name.optional(),
  description,
  user: userId,
  page,
  per_page: perPage,
  category,
  status,
});
