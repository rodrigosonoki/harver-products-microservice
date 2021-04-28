import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

async function getProductById(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    const found = await productService.getById(id);
    if (!found) {
      return res
        .status(404)
        .json({ message: `Product not found for id ${id}` });
    }
    return res.json(found);
  }
  return res.status(404).json({ message: `Product not found for id ${id}` });
}

export default getProductById;
