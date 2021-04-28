import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

async function getAllProducts(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  return res.json(await productService.getAll());
}

export default getAllProducts;
