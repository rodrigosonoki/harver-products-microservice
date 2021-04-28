import express from "express";
import cors from "cors";

import routes from "./routes";

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.use("/api/v1/products", routes);

app.listen(process.env.PORT, () => {
  console.log(`Product-API is running on PORT ${process.env.PORT}`);
});
