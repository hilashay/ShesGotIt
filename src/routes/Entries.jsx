import React from "react";
import "../Reviews.css";
import { formatKey } from "../utils";

function Entries(props) {
  return props.entries.map((entry) => (
    <div>
      {formatKey(entry[0])}: {entry[1]}
    </div>
  ));
}

export default Entries;
