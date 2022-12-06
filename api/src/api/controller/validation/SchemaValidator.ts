import { ObjectSchema } from 'joi';
import BadRequestError from '../../../error/implementations/BadRequestError';

class SchemaValidator {
  public async validate(schema: ObjectSchema, payload: any) {
    try {
      await schema.validateAsync(payload, { abortEarly: false });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  }
}

export default SchemaValidator;
