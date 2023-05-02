const express = require("express");
const RegistrationRouter = express.Router();
const RegistrationController = require("../controller/registration.controller");

RegistrationRouter.use("/register", RegistrationController);

module.exports = RegistrationRouter;
