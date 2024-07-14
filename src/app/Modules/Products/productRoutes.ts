import express from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from "./product.controller";

const router = express.Router();

router.route("/").get(getAllProductsController).post(createProductController);

router.route("/:id").get(getProductByIdController).put(updateProductController);

export const ProductRoute = router;
