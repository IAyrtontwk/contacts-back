/*
Ruta de Usuario /api/user
*/
const { Router } = require("express");
const { createUser, getUser, authenticarUser, deleteUser, updateUser } = require("../controller/user.controller");

const router = Router();

router.post("/", createUser);
router.post("/login", authenticarUser);
router.get("/", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
