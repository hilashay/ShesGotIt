import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useComments from "./CustomHooks/useComments";
// import useUserPhoto from "./CustomHooks/useUserPhoto";
import Comments from "./Components/DataComments";
import Photos from "./Components/DataPhotoUrl";
import useUserPhoto from "./CustomHooks/useUserPhoto";

function Reviews() {
  const reviews = useComments();
  const url = useUserPhoto();

  return (
    <div>
      <h1>reviews</h1>
      <div>
        <Photos users={url} />
        <Comments comments={reviews} />
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Reviews;
