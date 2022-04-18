import {
    BrowserRouter as Router, Navigate,
    Route, Routes, Link, Outlet
  } from "react-router-dom";


  
  
function DressMe() {
    return (
      <>
        <main>
          <h2>DRESS MEE</h2>
         
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default DressMe