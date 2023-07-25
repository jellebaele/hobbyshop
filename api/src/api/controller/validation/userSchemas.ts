import Joi from 'joi';
import { QUERY_MAX_PER_PAGE } from '../../../config';

const userId = Joi.string().min(3).max(128).required();
const page = Joi.number().min(1);
const perPage = Joi.number().min(1).max(+QUERY_MAX_PER_PAGE);
const name = Joi.string().min(3).max(128).trim();
const lastname = Joi.string().min(3).max(128).trim();
const email = Joi.string().email().lowercase().trim();
const username = Joi.string().min(3).max(128).trim();

export const getCurrentUserSchema = Joi.object({
  userId,
});

export const getUsersSchema = Joi.object().keys({
  userId: userId.optional(),
  page,
  per_page: perPage,
  name,
  lastname,
  email,
  username,
});

export const updateUserByIdSchema = Joi.object({
  userId,
  name,
  lastname,
  email,
  username,
});

export const deleteUserByIdSchema = Joi.object({
  userId: userId,
});
