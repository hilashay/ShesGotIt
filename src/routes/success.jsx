import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import DressMe from "../routes/dressme";

function Success(props) {
  return (
    <div className="reviews-container">
      <header>
        <h2>Perfect! Ive got all i need!</h2>
        <div>Name: {props.name}</div>
        <div>LastName: {props.lastName}</div>
        <div>Phone: {props.phone}</div>
        <div>Address: {props.address}</div>
        <div>Shirt Size: {props.shirtSize}</div>
        <div>Pants Size: {props.pantsSize}</div>
        <div>Never Wear: {props.neverWear}</div>
        <div>Budget: {props.budget}</div>
      </header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Success;
