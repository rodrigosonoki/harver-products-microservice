function createCategoryService(repository) {
  const getAll = async () => await repository.findAll();
  const getById = async (id) => await repository.findById(id);
  const getByName = async (name) => await repository.findByName(name);
  const create = async (category) => await repository.insert(category);

  return {
    getAll,
    getById,
    getByName,
    create,
  };
}

export default createCategoryService;
