import { Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./Product.services";

// Get all products
export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error fetching products", error: error.message });
    } else {
      res.status(500).json({ message: "Error fetching products" });
    }
  }
};

// Get product by ID
export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error fetching product", error: error.message });
    } else {
      res.status(500).json({ message: "Error fetching product" });
    }
  }
};

// Create new product
export const createProductController = async (req: Request, res: Response) => {
  const { name, price, description, category, stock, imageUrl, rating } =
    req.body;

  try {
    const newProduct = await createProduct({
      name,
      price,
      description,
      category,
      stock,
      imageUrl,
      rating,
      save: function (): unknown {
        throw new Error("Function not implemented.");
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    } else {
      res.status(500).json({ message: "Error creating product" });
    }
  }
};

// Update product by ID
export const updateProductController = async (req: Request, res: Response) => {
  const { name, price, description, category, stock, imageUrl, rating } =
    req.body;

  try {
    const updatedProduct = await updateProduct(req.params.id, {
      name,
      price,
      description,
      category,
      stock,
      imageUrl,
      rating,
      save: function (): unknown {
        throw new Error("Function not implemented.");
      },
    });

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    } else {
      res.status(500).json({ message: "Error updating product" });
    }
  }
};

// Delete product by ID
export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    if (deletedProduct) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error deleting product", error: error.message });
    } else {
      res.status(500).json({ message: "Error deleting product" });
    }
  }
};
