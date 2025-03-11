import { Link } from "react-router-dom";
import "../App.css"; // Optional, for styling

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="button">
        Home
      </Link>
      <Link to="/map" className="button">
        Map
      </Link>
      <Link to="/menu" className="button">
        Menu
      </Link>
      <Link to="/tickets" className="button">
        Tickets
      </Link>
      <Link to="/about" className="button">
        About
      </Link>
    </div>
  );
}

export default Navbar;
