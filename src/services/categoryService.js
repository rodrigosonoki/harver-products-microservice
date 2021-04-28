function createCategoryService(repository) {
  const getAll = async () => await repository.findAll();
  const getById = async (id) => await repository.findById(id);
  const getByName = async (name) => await repository.findByName(name);

  return {
    getAll,
    getById,
    getByName,
  };
}

export default createCategoryService;
