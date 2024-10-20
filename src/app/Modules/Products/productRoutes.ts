import express from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from "./product.controller";

const router = express.Router();

router.route("/").get(getAllProductsController).post(createProductController);

router.route("/:id").get(getProductByIdController).put(updateProductController);
router.delete("/:id", deleteProductController);
router.get("/:id", getProductByIdController);

export const ProductRoute = router;
