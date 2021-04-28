import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

function productController() {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  const getAll = async (req, res) => {
    return res.json(await productService.getAll());
  };

  const getById = async (req, res) => {
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
  };

  const create = async (req, res) => {
    const newProduct = req.body;
    try {
      const createdProduct = await productService.create(newProduct);
      return res.status(201).json(createdProduct);
    } catch (err) {
      return res.status(400).json({
        message: "Product is not valid.",
      });
    }
  };

  return {
    getAll,
    getById,
    create,
  };
}

export default productController;
