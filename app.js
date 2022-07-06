const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const { Review, Details, User } = require("./models");
const cors = require("cors");
const Schema = mongoose.Schema;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const getReview = async () => {
  const reviewSchema = new Schema({
    comments: String,
    photos: String,
    reviewr: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  });

  const Review = mongoose.models.Review
    ? mongoose.models.Review
    : mongoose.model("Review", reviewSchema);
  // const Review = mongoose.model("Review", reviewSchema);
  const reviews = await Review.find(); // read
  return reviews;
};

const getPhotoUrl = async () => {
  const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    phone: String,
    address: String,
    photoUrl: String,
  });
  const User = mongoose.models.User ? mongoose.models.User : mongoose.model("User", userSchema);
  const users = await User.find();
  return users;
};

// const alwaysWearSchema = new Schema({
//   skinny: String,
//   tight: String,
//   loose: String,
//   slim: String,
//   color: String,
//   other: String,
// });

// const AlwaysWear = mongoose.model("AlwaysWear", alwaysWearSchema);

app.get("/reviews", async (req, res) => {
  const reviews = await getReview();
  res.send(reviews);
});

app.get("/userPhoto", async (req, res) => {
  const photos = await getPhotoUrl();
  res.send(photos);
});

app.post("/dressme", async (req, res) => {
  // throw Error("Problem");
  // get the body data from the request
  console.log("req.body", req.body);
  const userData = new Details(req.body);
  // const userAlwaysWear = new AlwaysWear(req.body.alwaysWear);
  // const userAlwaysWear = new AlwaysWear(req.body.neverWear);
  // save it to the db
  userData
    .save()
    .then((item) => {
      // console.log("userdata: ", userData);
      console.log("Details: ", item);
      res.send({ item });
    })
    // if error - send an error response - return res.status(400).send("failed to save to DB")
    .catch((err) => {
      console.log("eroor user data: ", userData);
      res.status(400).send("unable to save to database", err);
    });
});

const initDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/hila");
};

app.listen(port, async () => {
  await initDB();
  // initModels();
  console.log(`Example app listening on port ${port}`);
});
