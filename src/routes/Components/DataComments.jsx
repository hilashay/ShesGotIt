import React from "react";

const Comments = (props) => {
  return (
    <div className="reviews-container">
      {props.comments?.map((x) => (
        <div className="each-review">{x.comments}</div>
      ))}{" "}
    </div>
  );
};

export default Comments;
