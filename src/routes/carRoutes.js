const express = require("express");
const router = express.Router();
const carControllers = require("../controllers/carControllers");
const { checkAdminPrivileges, checkLoggedIn } = require("../middlewares/checks");
const { validateCar } = require("../middlewares/validations");

router.get("/",checkLoggedIn,carControllers.getAll);
router.post("/", checkAdminPrivileges, validateCar, carControllers.create);
router.put("/buy/:id",checkLoggedIn, carControllers.buy);
router.get("/:id",checkLoggedIn, carControllers.getById);
router.put("/:id", checkLoggedIn,checkAdminPrivileges, carControllers.edit);
router.delete("/:id",checkLoggedIn, checkAdminPrivileges, carControllers.destroy);

module.exports = router;
