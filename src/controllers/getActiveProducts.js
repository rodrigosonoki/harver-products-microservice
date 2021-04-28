import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

async function getAllActiveProducts(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  return res.json(await productService.getAllActive());
}

export default getAllActiveProducts;
