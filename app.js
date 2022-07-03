const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const { Review } = require("./models");

const Schema = mongoose.Schema;
const cors = require("cors");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// task - add nodemon
const getComments = async () => {
  const commentSchema = new Schema({
    title: String,
    body: String,
  });
  const Comment = mongoose.models.Comment
    ? mongoose.models.Comment
    : mongoose.model("Comment", commentSchema);
  // const Comment = mongoose.model("Comment", commentSchema);
  const comments = await Comment.find(); // read
  console.log("comments ", comments);
  return comments;
};

//Declare the User Schema
const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  phone: String,
  address: String,
  photoUrl: String,
});
//Create a collection
const User = mongoose.model("User", userSchema);

const author = new User({
  // _id: new mongoose.Types.ObjectId(),
  name: "Idan Shay",
  phone: "0526506130",
  address: "tzadok 4",
});

author.save(() => {
  const comment1 = new Review({
    comments: "Hi Hi",
    userId: author._id, // assign the _id from the person
  });
  console.log("did it1");
  comment1.save(() => {
    console.log("did it2");
  });
});

const detailsSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  address: String,
  shirtSize: String,
  pantsSize: String,
  budget: String,
  alwaysWear: Array,
  neverWear: Array,
});
const Details = mongoose.model("Details", detailsSchema);

// const alwaysWearSchema = new Schema({
//   skinny: String,
//   tight: String,
//   loose: String,
//   slim: String,
//   color: String,
//   other: String,
// });

// const AlwaysWear = mongoose.model("AlwaysWear", alwaysWearSchema);

app.get("/", async (req, res) => {
  const comments = await getComments();
  res.send(comments);
  console.log(comments);
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
