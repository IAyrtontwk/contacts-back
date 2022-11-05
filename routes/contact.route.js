const { Router } = require("express");
const { getContact,getContactByID,createContact,deleteContact,updateContact } = require("../controller/contact.controller");

const router = Router();

router
.post("/", createContact)
.get("/", getContact)
.get("/:id", getContactByID)
.delete("/:id", deleteContact)
.put("/:id", updateContact)

module.exports = router;