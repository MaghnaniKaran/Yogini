const express = require("express");
const passport = require("passport");
const AuthController = express.Router();
const { login } = require("../services/auth.service");
const { sign } = require("../utils/auth.util");

AuthController.post("/login", async (req, res) => {
  await login(req.body)
    .then(() => {
      delete req.body.password;
      const token = sign(req.body);
      res.status(200).send({
        token: token,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

AuthController.get(
  "/googlelogin",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

AuthController.get(
  "/googlelogin/callback",
  passport.authenticate("google", {}),
  (req, res, next) => {
    console.log(req.user, req.isAuthenticated());
    res.send("user login successfully");
  }
);

AuthController.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  console.log(req.isAuthenticated());
  res.send("user logged out");
});

AuthController.get(
  "/facebooklogin",
  passport.authenticate("facebook", { scope: ["email", "profile"] })
);

AuthController.get(
  "/facebooklogin/callback",
  passport.authenticate("facebook", {}),
  (req, res, next) => {
    console.log(req.user, req.isAuthenticated());
    res.send("user login successfully");
  }
);

AuthController.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  console.log(req.isAuthenticated());
  res.send("user logged out");
});

module.exports = AuthController;
