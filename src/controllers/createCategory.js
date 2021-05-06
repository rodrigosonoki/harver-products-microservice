import createCategoryRepository from "../repositories/categoryRepository";
import createCategoryService from "../services/categoryService";

async function createCategory(req, res) {
  const categoryRepository = createCategoryRepository();
  const categoryService = createCategoryService(categoryRepository);

  const newCategory = req.body;

  try {
    //CREATE PRODUCT
    const createdCategory = await categoryService.create(newCategory);
    return res.status(201).json(createdCategory);
  } catch (err) {
    return res.status(400).json({
      message: "Categoria não é válida.",
    });
  }
}

export default createCategory;
