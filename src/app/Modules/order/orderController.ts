import { Request, Response } from "express";
import { cartService } from "../Cart/cart.services";
import { orderService } from "./orderServices";

// Place an order (with optional user)
export const placeOrder = async (req: Request, res: Response) => {
  const { userId } = req.params; // Optional userId
  const { email, name, phoneNumber, products, totalAmount, shippingAddress } =
    req.body;

  try {
    const order = await orderService.createOrder(
      userId,
      email,
      name,
      phoneNumber,
      products,
      totalAmount,
      shippingAddress
    );

    await cartService.clearCart(); // Clear cart after order is placed
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(req.params.orderId);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
};

// Get orders (for specific user or all orders)
export const getUserOrders = async (req: Request, res: Response) => {
  const { userId } = req.params; // Optional userId

  try {
    let orders;

    if (userId) {
      // If userId is provided, fetch specific user's orders
      orders = await orderService.getUserOrdersByUserId(userId);
    } else {
      // Otherwise, fetch all orders
      orders = await orderService.getAllOrders();
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};
