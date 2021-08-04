const express = require("express");
const { body } = require("express-validator/check");

const feedController = require("../controllers/feed");
const isAuth = require("..//middleware/is-auth");
const router = express.Router();

// GET /feed/products
router.get("/products", isAuth, feedController.getProducts);

// POST /feed/product
router.post(
  "/product",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
  ],
  feedController.addProduct
);

// router.get("/post/:postId", isAuth, feedController.getPost);

// router.put(
//   "/post/:postId",
//   isAuth,
//   [
//     body("title").trim().isLength({ min: 5 }),
//     body("content").trim().isLength({ min: 5 }),
//   ],
//   feedController.updatePost
// );

// router.delete("/post/:postId", isAuth, feedController.deletePost);
module.exports = router;
