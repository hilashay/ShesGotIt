const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const { Review, Details, User } = require("./models");
const cors = require("cors");
const Schema = mongoose.Schema;
// import express from "express";
// const app = express();
// import bodyParser from "body-parser";
// const port = 8000;
// import mongoose from "mongoose";
// import { Review, Details, User } from "./models";
// const cors = require("cors");
// const Schema = mongoose.Schema;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const getComments = async () => {
  const comments = await Review.find();
  return comments;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

// const getReviewByUserId = async (userId) => {
//   //get a user from db by user name
//   const comments = await getComments();
//   for (let i = 0; i < comments.length; i++) {
//     const comment = comments[i];
//     const commentIdString = comment.userId.toString();
//     return userId === commentIdString ? commentIdString : null;
//   }
// };

const getReviewByUserId = async (userId) => {
  //get a user from db by user name
  const allComments = await getComments();
  const commentToString = allComments.map((comment) => comment.userId.toString());
  const commentsFounded = commentToString.filter((comment) => comment === userId);
  const wantedComment = allComments.filter((comment) => comment.userId.toString() === userId);
  return userId === commentsFounded[0] ? wantedComment : "1";
};

const getUserByName = async (userName) => {
  const userFounded = await User.find({ name: userName });
  const userFoundedName = userFounded.map((user) => user.name)[0];
  return userName === userFoundedName ? userFounded : null;
};

app.get("/fullreview/:name", async (req, res) => {
  const user = await getUserByName(req.params.name);
  const comment = await getReviewByUserId(user[0]._id.toString());
  res.send({ user, comment });
});

// app.get("/fullreview/:id", async (req, res) => {
//   const users = await getUsers();
//   let user;
//   let comment;
//   for (let i = 0; i < users.length; i++) {
//     user = users[i];
//     // console.log("user1:", user);
//     const userId = user.id;
//     console.log("user1:", user);
//     console.log("comment:", comment);
//     comment = await getReviewByUserId(userId);
//     if (comment.userId === userId) {
//       console.log("user:", user);
//     }
//   }
//   // console.log("user:", user);
//   res.send({ comment, user });
// });

// const alwaysWearSchema = new Schema({
//   skinny: String,
//   tight: String,
//   loose: String,
//   slim: String,
//   color: String,
//   other: String,
// });

// const AlwaysWear = mongoose.model("AlwaysWear", alwaysWearSchema);

//create an http request with ths username as parmeter from the client side
// get the user fron db by that username
//
app.get("/reviews", async (req, res) => {
  const comments = await getComments();
  // console.log("comments:", comments);
  const users = await getUsers();
  // console.log("photos", photos);
  let newUser;
  let newUsers = [];
  for (let i = 0; i < comments.length; i++) {
    for (let j = 0; j < users.length; j++) {
      const comment = comments[i];
      // console.log("comment1:", comment);
      const user = users[j];
      // console.log("user:", user);
      const commentIdString = comment.userId.toString();
      const userIdString = user._id.toString();
      // console.log("reviewsIdString ", reviewsIdString);
      if (commentIdString === userIdString) {
        // console.log("comment ", comment.comments);
        newUser = {
          name: user.name,
          photUrl: user.photoUrl,
          comment: comment.comments,
        };
        newUsers.push(newUser);
      }
    }
  }
  res.send(newUsers);
});

app.get("/userPhoto", async (req, res) => {
  const photos = await getPhotoUrl();
  res.send(photos);
});

app.get("/users/:userName", async (req, res) => {
  console.log("req.params ", req.params);
  console.log("req.query.userName ", req.query.userName);
  const usedUser = await getUserByName(req.query.userName);
  console.log("usedUser", usedUser);
  res.send(usedUser);
});
// app.get("/users", async (req, res) => {
//   console.log("req.query.userName ", req.query.userName);
//   const usedUser = await getUserByName(req.query.userName);
//   console.log("usedUser", usedUser);
//   res.send(usedUser);
// });

app.get("/comments/:userId", async (req, res) => {
  const usedComment = await getReviewByUserId(req.query.userId);
  // console.log("req.query.userId", req.query.userId);
  // console.log("usedComment", usedComment);
  res.send(usedComment);
});

// app.get("/:name", async (req, res) => {
//   // console.log(req.query);
//   res.send(req.query);
// });
// app.get("/user/:name", async (req, res) => {
//   // console.log(req.query);
//   res.send(req.query);
// });

// app.get("/review/userName", async (req, res) => {
//   // console.log("userName", req);
//   res.send("ads");
// });

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
      // console.log("Details: ", item);
      res.send({ item });
    })
    // if error - send an error response - return res.status(400).send("failed to save to DB")
    .catch((err) => {
      // console.log("eroor user data: ", userData);
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
  // await testFunction();
  // await getReviewByUserId("62c58645846a036c633c440f");
  // const res = await User.find({ name: "Hila Shay" });
  // await getUserByName();
});
