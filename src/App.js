import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Menu from "./pages/Menu";
import Tickets from "./pages/Tickets";
import About from "./pages/About";
import SoldOut from "./pages/SoldOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/about" element={<About />} />
            <Route path="/sold-out" element={<SoldOut />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
