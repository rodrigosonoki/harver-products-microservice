import Product from "../models/Product";

function createProductRepository() {
  const findAll = async () => await Product.find().lean();
  const findById = async (id) => await Product.findById(id).lean();
  const insert = async (product) => {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
    });
    return await newProduct.save();
  };

  return {
    findAll,
    findById,
    insert,
  };
}

export default createProductRepository;
