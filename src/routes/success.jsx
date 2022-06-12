import React from "react";
import { Link } from "react-router-dom";
import { Entries, AlwaysAndNeverWearEntries } from "./Components/Entries";
import Header from "./Components/Header";

function Success(props) {
  console.log(props);
  const details = props.details;
  const alwaysWearSelect = props.alwaysWearSelect;
  const neverWearSelect = props.neverWearSelect;
  const entries = Object.entries(details);
  const alwaysEntries = Object.entries(alwaysWearSelect);
  const neverWearEntries = Object.entries(neverWearSelect);

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Perfect! Ive got all i need!</h2>
        <div class="success-cunteiner">
          <Entries entries={entries} />
          Never wear: <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={neverWearEntries} />
          <br />
          Always wear:
          <AlwaysAndNeverWearEntries alwaysAndNeverWearEntries={alwaysEntries} />
        </div>
        <br />
      </div>
    </div>
  );
}

export default Success;
