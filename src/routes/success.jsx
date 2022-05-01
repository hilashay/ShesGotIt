import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import DressMe from "../routes/dressme";
import { Entries, AlwaysWearEntries } from "./Compopnents.jsx/Entries";

function Success(props) {
  const details = props.details;
  const allValues = props.allValues;
  const entries = Object.entries(details);
  const alwaysWearEntries = Object.entries(allValues);

  return (
    <div className="reviews-container">
      <header>
        <h2>Perfect! Ive got all i need!</h2>
        <div>
          <Entries entries={entries} />
          <br></br>
          Always wear: <AlwaysWearEntries alwaysWearEntries={alwaysWearEntries} />
        </div>
      </header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Success;
