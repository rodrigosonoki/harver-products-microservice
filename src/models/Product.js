import db from "../database/db";

const ProductSchema = new db.Schema(
  {
    name: {
      type: "String",
      required: true,
      lowercase: true,
    },
    price: {
      type: Number,
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
