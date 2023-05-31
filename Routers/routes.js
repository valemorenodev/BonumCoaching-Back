const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/Controllers.js")

router
  .get("/User", RetsiController.getUser)
  .get("/User/:id", RetsiController.getUser)
  .post("/newUser", RetsiController.postNewUser)
  .put("/UserEdit/:id", RetsiController.editUser)
  .delete("/RemoveUser/:id", RetsiController.deleteUser)

module.exports = router;