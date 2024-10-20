"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cartController_1 = require("./cartController");
const router = express_1.default.Router();
router.get("/", cartController_1.getCart);
router.post("/", cartController_1.addProductToCart);
router.delete("/:productId", cartController_1.removeProductFromCart);
router.delete("/", cartController_1.clearCart);
router.put("/", cartController_1.updateProductInCart);
exports.cartRoutes = router;
