import Joi from 'joi';
import { QUERY_MAX_PER_PAGE } from '../../../config';

const name = Joi.string().min(3).max(128).trim().required();
const description = Joi.string().optional().min(0).max(256);
const categoryId = Joi.string().min(3).max(128).required();
const page = Joi.number().min(1);
const perPage = Joi.number().min(1).max(+QUERY_MAX_PER_PAGE);

const createCategorySchema = Joi.object({
  name,
  description,
});

const getCategoryByIdSchema = Joi.object({
  categoryId,
});

const getCategoriesSchema = Joi.object().keys({
  categoryId: categoryId.optional(),
  name: name.optional(),
  description,
  page,
  per_page: perPage,
});

const updateCategoryByIdSchema = Joi.object().keys({
  categoryId,
  name: name.optional(),
  description,
});

const deleteCategoryByIdSchema = Joi.object({
  categoryId,
});

export {
  createCategorySchema,
  getCategoryByIdSchema,
  getCategoriesSchema,
  updateCategoryByIdSchema,
  deleteCategoryByIdSchema,
};
