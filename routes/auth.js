const express = require("express");
const router = express.Router();
const User = require("../models/user");
const authController = require("../controllers/auth");
const { body } = require("express-validator/check");

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter valid email address")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-mail address is alread exists");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty(),
  ],
  authController.signup
);

router.put("/login", authController.login);

router.post("/logout", authController.signout);

module.exports = router;
