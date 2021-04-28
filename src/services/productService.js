function createProductService(repository) {
  const getAll = async () => await repository.findAll();
  const getById = async (id) => await repository.findById(id);
  const create = async (product) => await repository.insert(product);
  const inactivate = async (id) => await repository.inactivateById(id);

  return {
    getAll,
    getById,
    create,
    inactivate,
  };
}

export default createProductService;
