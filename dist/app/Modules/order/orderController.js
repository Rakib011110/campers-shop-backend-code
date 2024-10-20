"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOrders = exports.getOrderById = exports.placeOrder = void 0;
const cart_services_1 = require("../Cart/cart.services");
const orderServices_1 = require("./orderServices");
// Place an order (with optional user)
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params; // Optional userId
    const { email, name, phoneNumber, products, totalAmount, shippingAddress } = req.body;
    try {
        const order = yield orderServices_1.orderService.createOrder(userId, email, name, phoneNumber, products, totalAmount, shippingAddress);
        yield cart_services_1.cartService.clearCart(); // Clear cart after order is placed
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
});
exports.placeOrder = placeOrder;
// Get order by ID
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderServices_1.orderService.getOrderById(req.params.orderId);
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ message: "Order not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching order", error });
    }
});
exports.getOrderById = getOrderById;
// Get orders (for specific user or all orders)
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params; // Optional userId
    try {
        let orders;
        if (userId) {
            // If userId is provided, fetch specific user's orders
            orders = yield orderServices_1.orderService.getUserOrdersByUserId(userId);
        }
        else {
            // Otherwise, fetch all orders
            orders = yield orderServices_1.orderService.getAllOrders();
        }
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
});
exports.getUserOrders = getUserOrders;
