import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet } from "react-router-dom";

function DressMe(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <div>
      <main>
        <h2>DRESS MEE2</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// function DressMe() {
//   return (
//     <>
//       <main>
//         <h2>DRESS MEE</h2>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//       <form onSubmit={(x) => console.log(x)}>
//         <label>
//           Name:
//           <input type="text" value={4} onChange={(y) => console.log(y)} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </>
//   );
// }

export default DressMe;
