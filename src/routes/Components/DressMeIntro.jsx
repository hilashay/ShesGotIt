import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "../../App.css";

const DressMeIntro = () => {
  return (
    <div>
      <main>
        <h2>DRESS ME</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default DressMeIntro;
