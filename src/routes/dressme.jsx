import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet } from "react-router-dom";

function DressMe(props) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + name);
    event.preventDefault();
    setName("");
  };

  return (
    <div>
      <main>
        <h2>DRESS ME</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
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
