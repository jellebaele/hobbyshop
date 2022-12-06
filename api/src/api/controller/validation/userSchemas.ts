import Joi from 'joi';

const userId = Joi.string().min(3).max(128).required();
const limit = Joi.number().min(1).max(50);
const name = Joi.string().min(3).max(128).trim().required();
const lastname = Joi.string().min(3).max(128).trim().required();
const email = Joi.string().email().lowercase().trim().required();
const username = Joi.string().min(3).max(128).trim().required();

export const getCurrentUserSchema = Joi.object({
  userId,
});

export const getAllUsersSchema = Joi.object({
  limit,
});
