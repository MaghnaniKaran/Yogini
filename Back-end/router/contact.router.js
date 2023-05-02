const express = require("express");
const ContactRouter = express.Router();
const ContactController = require("../controller/contact.controller");

ContactRouter.use("/contact", ContactController);

module.exports = ContactRouter;
