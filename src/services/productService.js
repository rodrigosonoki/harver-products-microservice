function createProductService(repository) {
  const getAll = async () => await repository.findAll();
  const getAllActive = async () => await repository.findAllActive();
  const getById = async (id) => await repository.findById(id);
  const create = async (product) => await repository.insert(product);
  const inactivate = async (id) => await repository.inactivateById(id);
  const activate = async (id) => await repository.activateById(id);

  return {
    getAll,
    getById,
    getAllActive,
    create,
    inactivate,
    activate,
  };
}

export default createProductService;
