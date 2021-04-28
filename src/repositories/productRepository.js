import Product from "../models/Product";

function createProductRepository() {
  const findAll = async () => await Product.find().lean();

  const findAllActive = async () =>
    await Product.find({ isActive: true }).lean();

  const findById = async (id) => await Product.findById(id).lean();

  const insert = async (product) => {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      category: product.category,
      userId: product.userId,
      artwork: product.artwork,
    });
    return await newProduct.save();
  };

  const inactivateById = async (id) => {
    const product = await Product.findByIdAndUpdate(id, { isActive: false });
    return await product.save();
  };

  return {
    findAll,
    findAllActive,
    findById,
    insert,
    inactivateById,
  };
}

export default createProductRepository;
