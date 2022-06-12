import "./App.css";
import Reviews from "./routes/reviews";
import About from "./routes/about";
import DressMe from "./routes/dressme";
import Success from "./routes/success";
import Header from "./routes/Components/Header";
import Intro from "./routes/Components/Intro";
import DressMeButton from "./routes/Components/DressMeButton";
import MyJobPart from "./routes/Components/MyJobPart";
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
    <div>
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
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dressme" element={<DressMe />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        {/* <Route path="dressme/success" element={<Success  />} /> */}
      </Routes>
    </div>
  );
}

export default App;
