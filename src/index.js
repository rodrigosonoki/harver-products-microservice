import express from "express";
import cors from "cors";
import mongoose from 'mongoose'

require("dotenv/config");

import handleToken from './use-cases/validateJwt'
import createProduct from './controllers/createProduct'

const app = express();

mongoose.connect(process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);


app.use(express.json());
app.use(cors());
app.options("*", cors());


// Routes
app.post("/products", handleToken, createProduct);


app.listen(process.env.PORT, () =>
  console.log(`Auth API is running on port ${process.env.PORT}...`)
);
