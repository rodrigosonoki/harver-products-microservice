const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    images: [
      {
        type: "String",
      },
    ],
    description: "String",
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: "String",
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
