import React from "react";

const Review = ({ name, photoUrl, comment }) => {
  return (
    <div className="usersPhotos">
      {name}
      <img className="photos" src={photoUrl} alt="hila" />
      <div className="each-review">{comment}</div>
    </div>
  );
};

export default Review;
