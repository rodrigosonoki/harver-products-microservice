import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  inactivateProduct,
  getAllActiveProducts,
  activateProduct,
} from "../controllers";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/active", getAllActiveProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", createProduct);
productRoutes.post("/:id/inactivate", inactivateProduct);
productRoutes.post("/:id/activate", activateProduct);

export default productRoutes;
