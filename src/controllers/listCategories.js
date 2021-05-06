import createCategoryService from "../services/categoryService";
import createCategoryRepository from "../repositories/categoryRepository";

async function listCategories(req, res) {
  const categoryRepository = createCategoryRepository();
  const categoryService = createCategoryService(categoryRepository);

  return res.json(await categoryService.getAll());
}

export default listCategories;
