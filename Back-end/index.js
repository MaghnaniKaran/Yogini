require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const RootRouter = require("./route");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");

app.use(cors());

app.use(
  session({
    secret: "this_is_a_secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "269684494659-6j0lti4b3m0sa1ulnfa6044vqlnp4997.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `http://localhost:8080/api/v1/auth/googlelogin/callback`,
    },
    async (token, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

app.use(
  session({
    secret: "this_is_a_secret",
    resave: false,
    saveUninitialized: false,
  })
);
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  return cb(null, obj);
});
passport.use(
  new FacebookStrategy(
    {
      clientID: "jhsdjhdfjh",
      clientSecret: "dsfjhdfjhdfjh",
      callbackURL: `http://localhost:8080/api/v1/auth/faceooklogin/callback`,
    },
    async (token, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

app.use(morgan("dev"));
app.use(express.json());
app.use(RootRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Your server is running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`
  );
});
