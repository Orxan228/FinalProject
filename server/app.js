const express = require("express");
const app = express();
app.use(express.json())

const errorMiddleware = require("./middleware/error")

//Route Imports
const product = require("./routes/productRoute")
app.use("/api/v1", product)

//Route Imports
const newProduct = require("./routes/newProductRoute")
app.use("/api/v1", newProduct)

//Middleware for errors
app.use(errorMiddleware)

module.exports = app