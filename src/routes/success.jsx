import React from "react";
import { Link } from "react-router-dom";
import { Entries, AlwaysAndNeverWearEntries } from "./Components/Entries";

function Success(props) {
  const details = props.details;
  const alwaysWearSelect = props.alwaysWearSelect;
  const neverWearSelect = props.neverWearSelect;
  const entries = Object.entries(details);
  const alwaysEntries = Object.entries(alwaysWearSelect);
  const neverWearEntries = Object.entries(neverWearSelect);

  return (
    <div className="reviews-container">
      <header>
        <h2>Perfect! Ive got all i need!</h2>
        <div>
          <Entries entries={entries} />
          Never wear: <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={neverWearEntries} />
          <br />
          Always wear:
          <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={alwaysEntries} />
        </div>
      </header>
      <br />
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Success;
