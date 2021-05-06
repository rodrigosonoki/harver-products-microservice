import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  inactivateProduct,
  getAllActiveProducts,
  activateProduct,
  listCategories,
  createCategory,
} from "../controllers";

const productRoutes = express.Router();

productRoutes.get("/categories", listCategories);
productRoutes.post("/categories", createCategory);
productRoutes.get("/products", getAllProducts);
productRoutes.get("/products/active", getAllActiveProducts);
productRoutes.get("/products/:id", getProductById);
productRoutes.post("/products", createProduct);
productRoutes.post("/products/:id/inactivate", inactivateProduct);
productRoutes.post("/products/:id/activate", activateProduct);

export default productRoutes;
