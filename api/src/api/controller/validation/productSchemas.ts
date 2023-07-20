import Joi from 'joi';
import { ProductStatus } from '../../../utils/enums';

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

export const createProductSchema = Joi.object({
  name,
  description,
  category,
  amount,
  unit,
  status,
});

export const getProductByIdSchema = Joi.object({ productId });
export const updateProductByIdSchema = Joi.object({ productId });
export const deleteProductByIdSchema = Joi.object({ productId });
