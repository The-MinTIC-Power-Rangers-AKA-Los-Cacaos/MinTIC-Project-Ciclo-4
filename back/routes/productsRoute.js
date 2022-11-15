const express = require("express");
const router = express.Router();

const {getProducts, getProductsAll, newProduct, getProductById, editProduct, deleteProduct, createUpdateProductReview, getProductReviews, deleteProductReview} = require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/productos").get(getProducts);
router.route("/productos").post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route("/productos/:id").get(getProductById);
router.route("/productos/:id").put(isAuthenticatedUser, authorizeRoles("admin"), editProduct);
router.route("/productos/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/producto/clientopinion").put(isAuthenticatedUser, createUpdateProductReview);
router.route("/producto/opinions").get(isAuthenticatedUser, getProductReviews);
router.route("/producto/opinions").delete(isAuthenticatedUser, deleteProductReview);
router.route("/admin/productos").get(getProductsAll); 


module.exports = router;