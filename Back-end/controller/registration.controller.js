const express = require("express");
const RegistrationController = express.Router();
const RegistrationService = require("../services/registration.service");

RegistrationController.post("/add", async (req, res, next) => {
  const savedUser = await RegistrationService.save(req.body);
  res.status(200).send({
    res: savedUser,
  });
});

module.exports = RegistrationController;
