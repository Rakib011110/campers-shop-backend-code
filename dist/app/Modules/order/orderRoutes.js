"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../order/orderController");
const orderServices_1 = require("../order/orderServices");
const router = express_1.default.Router();
router.post("/:userId?", orderController_1.placeOrder);
router.get("/", orderServices_1.getOrderById);
router.get("/", orderController_1.getUserOrders);
exports.orderRoutes = router;
