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
exports.cartService = exports.updateCart = exports.clearCart = exports.removeFromCart = exports.addToCart = exports.getCart = void 0;
const cartModel_1 = require("./cartModel");
// Get all cart items
const getCart = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield cartModel_1.Cart.find().populate("product");
});
exports.getCart = getCart;
// Add product to the cart
const addToCart = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    let cart = yield cartModel_1.Cart.findOne({ product: productId });
    if (cart) {
        cart.quantity += quantity;
    }
    else {
        cart = new cartModel_1.Cart({ product: productId, quantity });
    }
    yield cart.save();
    return cart;
});
exports.addToCart = addToCart;
// Remove product from cart
const removeFromCart = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cartModel_1.Cart.findOneAndDelete({ product: productId });
    return cart;
});
exports.removeFromCart = removeFromCart;
const clearCart = () => __awaiter(void 0, void 0, void 0, function* () {
    yield cartModel_1.Cart.deleteMany();
});
exports.clearCart = clearCart;
const updateCart = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    let cart = yield cartModel_1.Cart.findOne({ product: productId });
    if (!cart) {
        throw new Error("Product not found in the cart");
    }
    // Update the quantity
    cart.quantity = quantity;
    yield cart.save();
    return cart;
});
exports.updateCart = updateCart;
exports.cartService = {
    getCart: exports.getCart,
    addToCart: exports.addToCart,
    removeFromCart: exports.removeFromCart,
    clearCart: exports.clearCart,
    updateCart: exports.updateCart,
};
