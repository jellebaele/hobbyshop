/**
 * _id
 * Name
 * Description
 * Category
 * Amount
 * Unit (mm, kg, ...)
 * Owner
 * Status
 * TimeCreated
 * TimeUpdated
 */
import { model, ObjectId, Schema } from 'mongoose';
import { ProductStatus } from '../utils/enums';

export interface IProductDto {
  name: string;
  description: string;
  category: string;
  amount: Number;
  unit: string;
  user: string;
  status: string;
}

export interface IProductDocument extends Document {
  _id: ObjectId;
  name: string;
  description: string;
  category: string;
  amount: Number;
  unit: string;
  user: Schema.Types.ObjectId;
  status: String;
}

const ProductSchema = new Schema<IProductDocument>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, ref: 'Category', required: true },
    amount: { type: Number, required: true },
    unit: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      default: ProductStatus.inactive,
      enum: ProductStatus,
    },
  },
  { timestamps: true }
);

const ProductModel = model<IProductDocument>('Product', ProductSchema);

export default ProductModel;
