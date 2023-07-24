import Joi from 'joi';

const userIdOptional = Joi.string().min(3).max(128);
const userIdRequired = userIdOptional.required();
const limit = Joi.number().min(1).max(50);
const name = Joi.string().min(3).max(128).trim();
const lastname = Joi.string().min(3).max(128).trim();
const email = Joi.string().email().lowercase().trim();
const username = Joi.string().min(3).max(128).trim();

export const getCurrentUserSchema = Joi.object({
  userId: userIdRequired,
});

export const getUsersSchema = Joi.object({
  userId: userIdOptional,
  limit,
  name,
  lastname,
  email,
  username,
});

export const updateUserByIdSchema = Joi.object({
  userId: userIdRequired,
});

export const deleteUserByIdSchema = Joi.object({
  userId: userIdRequired,
});
