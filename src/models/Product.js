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
    category: {
      type: db.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    userId: {
      type: "String",
      required: true,
    },
    artwork: [
      {
        type: "String",
        required: true,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "products" }
);

module.exports = db.model("Product", ProductSchema);
