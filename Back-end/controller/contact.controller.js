const express = require("express");
const ContactController = express.Router();
const ContactService = require("../services/contact.service");

ContactController.post("/add", async (req, res, next) => {
  const savedUser = await ContactService.save(req.body);
  res.status(200).send({
    res: savedUser,
  });
});

module.exports = ContactController;
