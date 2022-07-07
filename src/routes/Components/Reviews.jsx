import React from "react";
import Review from "./Review";

const Reviews = (props) => {
  const { users } = props;
  console.log(users);
  return (
    <div className="reviews-container">
      {users?.map((x) => (
        <Review photoUrl={x.photUrl} name={x.name} comment={x.comment} />
      ))}
    </div>
  );
};

export default Reviews;
