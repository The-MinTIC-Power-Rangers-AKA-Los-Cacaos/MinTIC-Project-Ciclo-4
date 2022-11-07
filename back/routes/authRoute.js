const express = require("express");
const router = express.Router();

const {newUser, loginUser, logoutUser, forgottenPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails, updateUserDetails, deleteUser} = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/usuario").post(newUser);
router.route("/usuario/login").get(loginUser);
router.route("/usuario/logout").get(isAuthenticatedUser, logoutUser);
router.route("/usuario/forgotpassword").post(forgottenPassword);
router.route("/usuario/resetpassword/:token").post(resetPassword);
router.route("/usuario/personal").get(isAuthenticatedUser, getUserProfile);
router.route("/usuario/updatepassword").put(isAuthenticatedUser, updatePassword);
router.route("/usuario/updateprofile").put(isAuthenticatedUser, updateProfile);

//admin routes

router.route("/admin/usuarios").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route("/admin/usuario/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails);
router.route("/admin/updateusuario/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUserDetails);
router.route("/admin/deleteusuario/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;