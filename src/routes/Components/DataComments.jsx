import React from "react";

const Comments = (props) => {
  return (
    <div>
      {props.comments?.map((x) => (
        <>
          <div>{x.title}</div>
          <div>{x.body}</div>
        </>
      ))}{" "}
    </div>
  );
};

export default Comments;
