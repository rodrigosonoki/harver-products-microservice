import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  inactivateProduct,
  getAllActiveProducts,
} from "../controllers";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/active", getAllActiveProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", createProduct);
productRoutes.post("/:id/inactivate", inactivateProduct);

export default productRoutes;
