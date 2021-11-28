const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator/check");

const Product = require("../models/product");
const User = require("../models/user");

exports.getProducts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 10;
  let totalItems;
  Product.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Product.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((products) => {
      res.status(200).json({
        success: true,
        message: "Fetched Products successfully.",
        products: products,
        totalProducts: totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      err.success = false;
      next(err);
    });
};

exports.addProduct = (req, res, next) => {
  /* const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  } */
  /*  if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  } */
  // const imageUrl = req.file.path.replace("\\", "/");
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const quantity = req.body.quantity;
  let creator;
  const product = new Product({
    title: title,
    description: description,
    price: price,
    quantity:quantity,
    imageUrl: imageUrl,
    creator: req.userId,
  });

  product
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      creator = user;
      user.products.push(product);
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Product added successfully!",
        product: product,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.status = false;
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }
      if (product.creator.toString() !== req.userId) {
        const error = new Error("Not authorized!");
        error.statusCode = 403;
        throw error;
      }
      return Product.findByIdAndDelete(productId);
    })
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.products.pull(productId);
      return user.save();
    })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Deleted product.",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

/* exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Post fetched.", post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}; */

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path.replace("\\", "/");
  }
  if (!imageUrl) {
    const error = new Error("No file picked.");
    error.statusCode = 422;
    throw error;
  }
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString !== req.userId) {
        const err = new Error("Not authorized");
        err.statusCode = 403;
        throw err;
      }
      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Post updated!", post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
