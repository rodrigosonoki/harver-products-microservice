function createProductService(repository) {
  const getAll = async () => await repository.findAll();
  const getAllActive = async () => await repository.findAllActive();
  const getById = async (id) => await repository.findById(id);
  const create = async (product) => await repository.insert(product);
  const inactivate = async (id) => await repository.inactivateById(id);
  const activate = async (id) => await repository.activateById(id);
  const updatePrice = async (id, price) =>
    await repository.updatePriceById(id, price);

  return {
    getAll,
    getById,
    getAllActive,
    create,
    inactivate,
    activate,
    updatePrice,
  };
}

export default createProductService;
