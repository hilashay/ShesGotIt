import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useComments from "./CustomHooks/useComments";
import Comments from "./Components/DataComments";

function Reviews() {
  const comments = useComments("http://localhost:8080/");

  return (
    <div className="reviews-container">
      <h1>reviews</h1>
      <div>
        <Comments comments={comments} />
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Reviews;
