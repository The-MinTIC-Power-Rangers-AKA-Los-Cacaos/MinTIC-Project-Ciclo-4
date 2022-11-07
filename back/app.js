const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const products = require("./routes/productsRoute");
const users = require("./routes/authRoute");
const orders = require("./routes/ordersRoute");

app.use("/api", products);
app.use("/api", users);
app.use("/api", orders);

app.use(errorMiddleware);

module.exports = app;