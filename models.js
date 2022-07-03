const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Review;
function initReviews() {
  const reviewSchema = new Schema({
    comments: String,
    photos: String,
    reviewr: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  });

  //Create a collection
  Review = mongoose.model("Review", reviewSchema);
}

function init() {
  initReviews();

  //initialize all the models & schemas here
}

init();

module.exports = { Review, init };
