import React from "react";
import "../../Reviews.css";
import first from "../../first.jpeg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import homepage from "../../homepage.jpeg";
import "../../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200;300&display=swap');
      </style>
      ;
      <img src={first} className="App-logo" alt="Logo" />
      <br />
      <div className="hr"></div>
      <nav>
        <Link to="/about">About</Link> <Link to="/reviews">Reviews</Link>
      </nav>
      <img src={homepage} className="App-main-img" alt="Logo" />
    </header>
  );
};

export default Header;
