import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import DressMe from "../routes/dressme";
import Entries from "./Entries";

// function Entries(props) {
//   return props.entries.map((entry) => (
//     <div>
//       {formatKey(entry[0])}: {entry[1]}
//     </div>
//   ));
// }
// const Entries = (props) => {
//   return props.entries.map((entry) => (
//     <div>
//       {formatKey(entry[0])}: {entry[1]}
//     </div>
//   ));
// };

function Success(props) {
  const details = props.details;
  const entries = Object.entries(details);
  return (
    <div className="reviews-container">
      <header>
        <h2>Perfect! Ive got all i need!</h2>
        <div>
          <Entries entries={entries} />
        </div>
      </header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Success;

// const hila =
//     {name: 'hila', lastName: 'idan', phone: 'shay'}

// for ( var detail in hila ) {
//     let keys = detail
//       console.log(keys)
//   }

// for (let i = 0; i < Object.values(hila).length; i++) {
//     let values = Object.values(hila)[i]
//   console.log(values)
// }

// for (let i = 0; i < Object.values(details).length; i++) {
//     console.log(Object.keys(details)[i]+" "+Object.values(details)[i])
//    }
