import db from "../database/db";

const ProductSchema = new db.Schema(
  {
    name: {
      type: "String",
      required: true,
      lowercase: true,
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
      default: Date.now,
    },
  },
  { collection: "products" }
);

module.exports = db.model("Product", ProductSchema);
