import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "../Products/product.types";

export interface ICart extends Document {
  product: IProduct;
  quantity: number;
}

const cartSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create and export the Cart model
export const Cart = mongoose.model<ICart>("Cart", cartSchema);
