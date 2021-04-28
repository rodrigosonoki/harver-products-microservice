import Sku from "../models/Sku";

function createCategoryRepository() {
  const insert = async (product) => {
    const sizes = ["P", "M", "G", "GG"];
    sizes.forEach(async function (size) {
      const sku = await new Sku({
        product,
        size,
      });
      await sku.save();
    });
  };

  return {
    insert,
  };
}

export default createCategoryRepository;
