import mockData from "./products";
import Sku from "../models/Sku";
import Product from "../models/Product";

async function dropProductCollection() {
  const products = await Product.find();
  if (products.length !== 0) {
    console.log("> [PRODUCTS] Dropping table...");
    await Product.collection.drop();
    console.log("> [PRODUCTS] Table dropped.");
  } else {
    console.log("> [PRODUCTS] Table is already empty.");
  }
}

async function dropSkuCollection() {
  const skus = await Sku.find();
  if (skus.length !== 0) {
    console.log("> [SKUS] Dropping table...");
    await Sku.collection.drop();
    console.log("> [SKUS] Table dropped.");
  } else {
    console.log("> [SKUS] Table is already empty.");
  }
}

async function createProducts() {
  mockData.forEach(async function (data) {
    const product = await new Product(data);
    return await product.save();
  });
}

async function run() {
  await dropProductCollection();
  await dropSkuCollection();
  await createProducts();
  console.log("> [PROCESS] Gracefully shutting down...");
  process.exit();
}

setTimeout(() => run(), 2000);
