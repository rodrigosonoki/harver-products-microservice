function createSkuService(repository) {
  const create = async (product) => await repository.insert(product);
  return {
    create,
  };
}

export default createSkuService;
