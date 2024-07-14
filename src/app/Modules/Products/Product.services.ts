import { IProduct } from "./product.types";
import { Product } from "./productModel";

export const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const product = new Product(payload);
  return await product.save();
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  return await Product.find({});
};

export const getProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

export const updateProduct = async (
  id: string,
  productData: IProduct
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};
