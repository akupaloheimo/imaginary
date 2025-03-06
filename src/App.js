import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
