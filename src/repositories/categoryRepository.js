import Category from "../models/Product";

function createCategoryRepository() {
  const findAll = async () => await Category.find().lean();
  const findById = async (id) => await Category.findById(id).lean();
  const findByName = async (name) => await Category.findOne(name).lean();

  return {
    findAll,
    findById,
    findByName,
  };
}

export default createCategoryRepository;
