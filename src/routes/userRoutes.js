const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const {checkLoggedIn,checkAdminPrivileges} = require('../middlewares/checks');
const {validateUser} = require('../middlewares/validations');

router.get("/",checkLoggedIn,checkAdminPrivileges,userControllers.getAll);
router.post("/register",validateUser, userControllers.register);
router.post("/login",validateUser, userControllers.login);
router.get("/:id",checkLoggedIn,checkAdminPrivileges,userControllers.getById);
router.put("/:id",checkLoggedIn,checkAdminPrivileges, userControllers.edit);
router.delete("/:id",checkLoggedIn,checkAdminPrivileges, userControllers.destroy);
router.get("/:id",checkLoggedIn,checkAdminPrivileges, userControllers.getById);

module.exports = router;
