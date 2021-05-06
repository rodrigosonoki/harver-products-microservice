import createProductRepository from "../repositories/productRepository";
import createProductService from "../services/productService";

async function inactivateProduct(req, res) {
  const productRepository = createProductRepository();
  const productService = createProductService(productRepository);

  const { id } = req.params;

  //CHECK IF IT IS A VALID OBJECT ID
  if (!id.match(/^[0-9a-fA-F]{24}$/))
    return res.status(404).json({ message: `Id inválido.` });

  const found = await productService.inactivate(id);

  if (!found) {
    return res
      .status(404)
      .json({ message: `Produto de id ${id} não foi encontrado` });
  }

  return res.status(200).json({ message: "Produto inativado com sucesso" });
}

export default inactivateProduct;
