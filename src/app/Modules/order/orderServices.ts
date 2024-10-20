import { Order } from "./orderModel";
import { ICart } from "../Cart/cartModel";

// Create Order with optional userId
export const createOrder = async (
  userId?: string,
  email?: string,
  name?: string,
  phoneNumber?: string,
  products?: ICart["product"],
  totalAmount?: number,
  shippingAddress?: string
) => {
  const newOrder = new Order({
    userId,
    email,
    name,
    phoneNumber,
    products,
    totalAmount,
    shippingAddress,
  });
  return await newOrder.save();
};

// Get Order by ID
export const getOrderById = async (orderId: string) => {
  return await Order.findById(orderId).populate("products.product");
};

// Get all orders or orders for a specific user
export const getUserOrdersByUserId = async (userId: string) => {
  return await Order.find({ userId }).populate("products.product");
};

// Get all orders (admin or guest)
export const getAllOrders = async () => {
  return await Order.find().populate("products.product");
};

export const orderService = {
  createOrder,
  getOrderById,
  getUserOrdersByUserId,
  getAllOrders,
};
