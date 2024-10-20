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
exports.clearCart = exports.updateProductInCart = exports.removeProductFromCart = exports.addProductToCart = exports.getCart = void 0;
const cart_services_1 = require("./cart.services");
// Get all cart items
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_services_1.cartService.getCart();
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching cart", error });
    }
});
exports.getCart = getCart;
// Add product to the cart
const addProductToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = req.body;
    try {
        const cart = yield cart_services_1.cartService.addToCart(productId, quantity);
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Error adding product to cart", error });
    }
});
exports.addProductToCart = addProductToCart;
// Remove product from cart
const removeProductFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const cart = yield cart_services_1.cartService.removeFromCart(productId);
        res.status(200).json({ message: "Product removed", cart });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error removing product from cart", error });
    }
});
exports.removeProductFromCart = removeProductFromCart;
// Update product quantity in the cart
const updateProductInCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = req.body;
    try {
        const updatedCart = yield cart_services_1.cartService.updateCart(productId, quantity);
        res.status(200).json({ message: "Cart updated", cart: updatedCart });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating cart", error });
    }
});
exports.updateProductInCart = updateProductInCart;
// Clear all products from cart
const clearCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cart_services_1.cartService.clearCart();
        res.status(200).json({ message: "Cart cleared" });
    }
    catch (error) {
        res.status(500).json({ message: "Error clearing cart", error });
    }
});
exports.clearCart = clearCart;
