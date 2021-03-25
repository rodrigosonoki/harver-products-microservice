const mongoose = require("mongoose");

const skuSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    size: {
      type: "String",
      required: true,
    },
    quantity: {
        type: Number,
        default: 1000000
    }
  },
  { collection: "skus" }
);

module.exports = mongoose.model("Sku", skuSchema);
