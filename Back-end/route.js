const express = require("express");
const RootRouter = express.Router();
const pkg = require("./package.json");
const RegisterRouter = require("./router/registration.router");
const AuthRouter = require("./router/auth.router");
const ContactRouter = require("./router/contact.router");

RootRouter.use(`/api/v${parseInt(pkg.version)}`, RegisterRouter);
RootRouter.use(`/api/v${parseInt(pkg.version)}`, AuthRouter);
RootRouter.use(`/api/v${parseInt(pkg.version)}`, ContactRouter);

module.exports = RootRouter;
