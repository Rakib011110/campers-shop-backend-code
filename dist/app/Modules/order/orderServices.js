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
exports.orderService = exports.getAllOrders = exports.getUserOrdersByUserId = exports.getOrderById = exports.createOrder = void 0;
const orderModel_1 = require("./orderModel");
// Create Order with optional userId
const createOrder = (userId, email, name, phoneNumber, products, totalAmount, shippingAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = new orderModel_1.Order({
        userId,
        email,
        name,
        phoneNumber,
        products,
        totalAmount,
        shippingAddress,
    });
    return yield newOrder.save();
});
exports.createOrder = createOrder;
// Get Order by ID
const getOrderById = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.Order.findById(orderId).populate("products.product");
});
exports.getOrderById = getOrderById;
// Get all orders or orders for a specific user
const getUserOrdersByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.Order.find({ userId }).populate("products.product");
});
exports.getUserOrdersByUserId = getUserOrdersByUserId;
// Get all orders (admin or guest)
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.Order.find().populate("products.product");
});
exports.getAllOrders = getAllOrders;
exports.orderService = {
    createOrder: exports.createOrder,
    getOrderById: exports.getOrderById,
    getUserOrdersByUserId: exports.getUserOrdersByUserId,
    getAllOrders: exports.getAllOrders,
};
