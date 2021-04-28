import db from "../database/db";

const categorySchema = new db.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: true,
    },
  },
  { collection: "categories" }
);

module.exports = db.model("Category", categorySchema);
