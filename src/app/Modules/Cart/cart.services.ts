import { Cart } from "./cartModel";
import { IProduct } from "../Products/product.types";

// Get all cart items
export const getCart = async () => {
  return await Cart.find().populate("product");
};

// Add product to the cart
export const addToCart = async (productId: IProduct, quantity: number) => {
  let cart = await Cart.findOne({ product: productId });

  if (cart) {
    cart.quantity += quantity;
  } else {
    cart = new Cart({ product: productId, quantity });
  }

  await cart.save();
  return cart;
};

// Remove product from cart
export const removeFromCart = async (productId: string) => {
  const cart = await Cart.findOneAndDelete({ product: productId });
  return cart;
};

export const clearCart = async () => {
  await Cart.deleteMany();
};
export const updateCart = async (productId: string, quantity: number) => {
  let cart = await Cart.findOne({ product: productId });

  if (!cart) {
    throw new Error("Product not found in the cart");
  }

  // Update the quantity
  cart.quantity = quantity;

  await cart.save();
  return cart;
};

export const cartService = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCart,
};
