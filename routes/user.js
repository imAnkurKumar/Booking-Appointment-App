const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/add-user", userController.adduser);
router.get("/get-users", userController.getElement);
router.delete("/delete-user/:id", userController.getDelete);

module.exports = router;
