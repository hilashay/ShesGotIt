const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Review;
const initReviews = () => {
  const reviewSchema = new Schema({
    comments: String,
    photos: String,
    reviewr: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  });

  //Create a collection
  Review = mongoose.model("Review", reviewSchema);
};

let Details;
const initDetails = () => {
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

  Details = mongoose.model("Details", detailsSchema);
};

let User;
const initUser = () => {
  const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    phone: String,
    address: String,
    photoUrl: String,
  });

  User = mongoose.model("User", userSchema);
};

function init() {
  initReviews();
  initDetails();
  initUser();
  //initialize all the models & schemas here
}

init();

module.exports = { Details, User, Review };

// let obj = {}

// function init(){
//     obj.age = 5
//     // obj.age = 5
// }
// module.exports = { obj, init };

// let obj = {}

// function init(){
//     obj = {age: 5}
//     // obj.age = 5
// }
// module.exports = { obj, init };
