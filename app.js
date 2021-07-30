const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");
const feedRoutes = require("./routes/feed");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4());
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Accept,X-Request-With, Content-Type, Authorization"
  );
  next();
});
app.use(cors());

app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const successStatus = error ? false : true;
  const data = error.data;
  res
    .status(status)
    .json({ message: message, data: data, success: successStatus });
});

mongoose
  .connect(
    "mongodb+srv://newuser:SxT3jpNzP7qjz2Jw@cluster0.bykdf.mongodb.net/pms?retryWrites=true"
  )
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
