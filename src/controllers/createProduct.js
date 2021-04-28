import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

import createSkuRepository from "../repositories/skuRepository";
import createSkuService from "../services/skuService";

async function createProduct(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  const skuRepository = createSkuRepository();
  const skuService = createSkuService(skuRepository);

  const newProduct = req.body;

  try {
    //CREATE PRODUCT
    const createdProduct = await productService.create(newProduct);

    //CREATE ALL SKUS FOR ALL SIZES
    await skuService.create(createdProduct._id);
    return res.status(201).json(createdProduct);
  } catch (err) {
    return res.status(400).json({
      message: "Produto não é válido.",
    });
  }
}

export default createProduct;
