import express from "express";
import { getUserOrders, placeOrder } from "../order/orderController";
import { getOrderById } from "../order/orderServices";

const router = express.Router();

router.post("/:userId?", placeOrder);
router.get("/", getOrderById);
router.get("/", getUserOrders);

export const orderRoutes = router;
