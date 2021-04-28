import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

async function createProduct(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  const newProduct = req.body;

  try {
    const createdProduct = await productService.create(newProduct);
    return res.status(201).json(createdProduct);
  } catch (err) {
    return res.status(400).json({
      message: "Product is not valid.",
    });
  }
}

export default createProduct;
