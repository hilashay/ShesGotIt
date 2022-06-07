import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";

function Reviews() {
  return (
    <div className="reviews-container">
      <header>
        <h1>reviews</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Reviews;
