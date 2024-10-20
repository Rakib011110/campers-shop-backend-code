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
exports.deleteProductController = exports.updateProductController = exports.createProductController = exports.getProductByIdController = exports.getAllProductsController = void 0;
const Product_services_1 = require("./Product.services");
// Get all products
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, Product_services_1.getAllProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        if (error instanceof Error) {
            res
                .status(500)
                .json({ message: "Error fetching products", error: error.message });
        }
        else {
            res.status(500).json({ message: "Error fetching products" });
        }
    }
});
exports.getAllProductsController = getAllProductsController;
// Get product by ID
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, Product_services_1.getProductById)(req.params.id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res
                .status(500)
                .json({ message: "Error fetching product", error: error.message });
        }
        else {
            res.status(500).json({ message: "Error fetching product" });
        }
    }
});
exports.getProductByIdController = getProductByIdController;
// Create new product
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, category, stock, imageUrl, rating } = req.body;
    try {
        const newProduct = yield (0, Product_services_1.createProduct)({
            name,
            price,
            description,
            category,
            stock,
            imageUrl,
            rating,
            save: function () {
                throw new Error("Function not implemented.");
            },
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        if (error instanceof Error) {
            res
                .status(500)
                .json({ message: "Error creating product", error: error.message });
        }
        else {
            res.status(500).json({ message: "Error creating product" });
        }
    }
});
exports.createProductController = createProductController;
// Update product by ID
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, category, stock, imageUrl, rating } = req.body;
    try {
        const updatedProduct = yield (0, Product_services_1.updateProduct)(req.params.id, {
            name,
            price,
            description,
            category,
            stock,
            imageUrl,
            rating,
            save: function () {
                throw new Error("Function not implemented.");
            },
        });
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res
                .status(500)
                .json({ message: "Error updating product", error: error.message });
        }
        else {
            res.status(500).json({ message: "Error updating product" });
        }
    }
});
exports.updateProductController = updateProductController;
// Delete product by ID
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield (0, Product_services_1.deleteProduct)(req.params.id);
        if (deletedProduct) {
            res.status(200).json({ message: "Product deleted successfully" });
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res
                .status(500)
                .json({ message: "Error deleting product", error: error.message });
        }
        else {
            res.status(500).json({ message: "Error deleting product" });
        }
    }
});
exports.deleteProductController = deleteProductController;
