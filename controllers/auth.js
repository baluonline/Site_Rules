const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      loadUser = user;
      return loadUser;
    })
    .then((loadUser) => {
      if (loadUser) {
        success: false;
        message: null;
        res.status(409).json({
          message: "User is already existed, Please try again",
          userId: loadUser._id,
        });
      } else {
        bcrypt
          .hash(password, 12)
          .then((hashedPwd) => {
            const user = new User({
              email: email,
              password: hashedPwd,
              name: name,
              status: "active",
            });
            return user.save();
          })
          .then((result) => {
            success: true;
            message: null;
            res
              .status(201)
              .json({ message: "User created", userId: result._id });
          })
          .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            err.success = false;
            (err.message = "User is not created, Please try again"), next(err);
          });
      }
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("A user with this email could not be found");
        error.statusCode = 401;
        throw error;
      }
      loadUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadUser.email,
          userId: loadUser._id.toString(),
        },
        "somesupersecretsecret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        success: true,
        message: null,
        token: token,
        userId: loadUser._id.toString(),
      });
    })

    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
