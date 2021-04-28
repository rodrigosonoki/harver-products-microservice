function createProductService(repository) {
  const getAll = async () => await repository.findAll();
  const getById = async (id) => await repository.findById(id);
  const create = async (product) => await repository.insert(product);

  return {
    getAll,
    getById,
    create,
  };
}

export default createProductService;
