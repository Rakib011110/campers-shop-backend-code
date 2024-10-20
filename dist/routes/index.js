"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = require("../app/Modules/Products/productRoutes");
const cartRoutes_1 = require("../app/Modules/Cart/cartRoutes");
const orderRoutes_1 = require("../app/Modules/order/orderRoutes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: productRoutes_1.ProductRoute,
    },
    {
        path: "/cart",
        route: cartRoutes_1.cartRoutes,
    },
    {
        path: "/order",
        route: orderRoutes_1.orderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
