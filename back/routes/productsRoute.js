const express = require("express");
const router = express.Router();

const {getProducts, newProduct, getProductById, editProduct, deleteProduct} = require("../controllers/productsController");

router.route("/productos").get(getProducts);

router.route("/productos").post(newProduct);

router.route("/productos/:id").get(getProductById);

router.route("/productos/:id").put(editProduct);

router.route("/productos/:id").delete(deleteProduct);

module.exports = router;