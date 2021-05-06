import Category from "../models/Category";

function createCategoryRepository() {
  const findAll = async () => await Category.find().lean();
  const findById = async (id) => await Category.findById(id).lean();
  const findByName = async (name) => await Category.findOne(name).lean();
  const insert = async (category) => {
    const newCategory = new Category({
      name: category.name,
      description: category.description,
    });
    return await newCategory.save();
  };

  return {
    findAll,
    findById,
    findByName,
    insert,
  };
}

export default createCategoryRepository;
