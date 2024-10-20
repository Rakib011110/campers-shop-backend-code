import { Request, Response } from "express";
import { cartService } from "./cart.services";

// Get all cart items
export const getCart = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.getCart();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// Add product to the cart
export const addProductToCart = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await cartService.addToCart(productId, quantity);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error });
  }
};

// Remove product from cart
export const removeProductFromCart = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const cart = await cartService.removeFromCart(productId);
    res.status(200).json({ message: "Product removed", cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing product from cart", error });
  }
};
// Update product quantity in the cart
export const updateProductInCart = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  try {
    const updatedCart = await cartService.updateCart(productId, quantity);
    res.status(200).json({ message: "Cart updated", cart: updatedCart });
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error });
  }
};

// Clear all products from cart
export const clearCart = async (req: Request, res: Response) => {
  try {
    await cartService.clearCart();
    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error });
  }
};
