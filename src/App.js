import "./App.css";
import Reviews from "./routes/reviews";
import About from "./routes/about";
import DressMe from "./routes/dressme";
import Success from "./routes/success";
import Header from "./routes/Compopnents.jsx/Header";
import Intro from "./routes/Compopnents.jsx/Intro";
import DressMeButton from "./routes/Compopnents.jsx/DressMeButton";
import MyJobPart from "./routes/Compopnents.jsx/MyJobPart";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Intro />
      <DressMeButton />
      <MyJobPart />

      <footer>
        <p>© 2022 Hila Shay She's-got-it</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dressme" element={<DressMe />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dressme/success" element={<Success name={"idab"} />} />
      </Routes>
    </div>
  );
}

export default App;
