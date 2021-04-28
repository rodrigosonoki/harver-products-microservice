import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  inactivateProduct,
} from "../controllers";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", createProduct);
productRoutes.post("/:id/inactivate", inactivateProduct);

export default productRoutes;
