import { Router } from "express";

import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/products-Controller";

const productRoutes = Router();
const productsController = new ProductsController();

productRoutes.get("/", productsController.index);

productRoutes.post("/", myMiddleware, productsController.create);

export { productRoutes };
