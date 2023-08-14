import { model, ObjectId, Schema } from 'mongoose';

export interface ICategoryDto {
  name: string;
  description?: string;
  products?: string[];
}

export interface ICategoryDocument extends Document {
  _id: ObjectId;
  name: string;
  description: string;
  products: ObjectId[];
}

const CategorySchema = new Schema<ICategoryDocument>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false, default: '' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: false }],
  },
  { timestamps: true }
);

const CategoryModel = model<ICategoryDocument>('Category', CategorySchema);

export default CategoryModel;
