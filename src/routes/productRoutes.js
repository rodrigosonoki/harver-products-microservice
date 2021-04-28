import express from "express";
import productController from "../controllers/productController";

const productRoutes = express.Router();

const controller = productController();

productRoutes.get("/", controller.getAll);
productRoutes.get("/:id", controller.getById);
productRoutes.post("/", controller.create);

export default productRoutes;
