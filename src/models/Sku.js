import db from "../database/db";

const skuSchema = new db.Schema(
  {
    product: {
      type: db.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: "String",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1000000,
    },
  },
  { collection: "skus" }
);

module.exports = db.model("Sku", skuSchema);
