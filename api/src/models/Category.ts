import { model, Schema } from 'mongoose';

export interface ICategoryDto {
  name: string;
  description: string;
}

export interface ICategoryDocument extends Document {
  name: string;
  description: string;
}

const CategorySchema = new Schema<ICategoryDocument>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const CategoryModel = model<ICategoryDocument>('Category', CategorySchema);

export default CategoryModel;
