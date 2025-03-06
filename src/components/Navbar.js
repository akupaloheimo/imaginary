import { Link } from "react-router-dom";
import "../App.css"; // Optional, for styling

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="button">Home</Link>
      <Link to="/map" className="button">Map</Link>
      <Link to="/menu" className="button">Menu</Link>
    </div>
  );
}

export default Navbar;