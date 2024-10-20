import { Router } from "express";
import { ProductRoute } from "../app/Modules/Products/productRoutes";
import { cartRoutes } from "../app/Modules/Cart/cartRoutes";
import { orderRoutes } from "../app/Modules/order/orderRoutes";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoute,
  },
  {
    path: "/cart",
    route: cartRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
