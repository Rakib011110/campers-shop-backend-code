import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "../Products/product.types";

export interface IOrder extends Document {
  userId?: string; // Optional userId for guests
  email: string;
  name: string;
  phoneNumber: string;
  products: {
    product: IProduct;
    quantity: number;
  }[];
  totalAmount: number;
  shippingAddress: string;
  orderStatus: string;
}

const orderSchema: Schema = new Schema({
  userId: { type: String }, // Made optional
  email: { type: String },
  name: { type: String },
  phoneNumber: { type: String },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
    },
  ],
  totalAmount: { type: Number },
  shippingAddress: { type: String },
  orderStatus: { type: String, default: "Processing" },
});

export const Order = mongoose.model<IOrder>("Order", orderSchema);
