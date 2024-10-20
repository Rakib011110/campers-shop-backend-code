import express from "express";
import {
  addProductToCart,
  clearCart,
  getCart,
  removeProductFromCart,
  updateProductInCart,
} from "./cartController";

const router = express.Router();

router.get("/", getCart);
router.post("/", addProductToCart);
router.delete("/:productId", removeProductFromCart);
router.delete("/", clearCart);
router.put("/", updateProductInCart);
export const cartRoutes = router;
