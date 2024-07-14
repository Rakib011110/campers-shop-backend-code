import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.types";

interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, required: true },
});

export const Product = mongoose.model<IProductModel>("Product", ProductSchema);
