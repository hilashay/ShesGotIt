const { User, Review } = require("./models");

const getComments = async () => {
  const comments = await Review.find();
  return comments;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const getReviewByUserId = async (userId) => {
  //get a user from db by user name
  const allComments = await getComments();
  const commentToString = allComments.map((comment) => comment.userId.toString());
  const commentsFounded = commentToString.filter((comment) => comment === userId);
  const wantedComment = allComments.filter((comment) => comment.userId.toString() === userId);
  return userId === commentsFounded[0] ? wantedComment : null;
};

const getUserByName = async (userName) => {
  const userFounded = await User.find({ name: userName });
  const userFoundedName = userFounded.map((user) => user.name)[0];
  return userName === userFoundedName ? userFounded : null;
};

module.exports = { getComments, getUsers, getReviewByUserId, getUserByName };
