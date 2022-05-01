import React from "react";
import "../Reviews.css";
import { formatKey } from "../utils";

export function Entries(props) {
  return props.entries.map((entry) => (
    <div>
      {formatKey(entry[0])}: {entry[1]}
      <br></br>
      <br></br>
    </div>
  ));
}

export function AlwaysWearEntries(props) {
  return props.alwaysWearEntries.map((entry) => <div>{formatKey(entry[1])}</div>);
}
