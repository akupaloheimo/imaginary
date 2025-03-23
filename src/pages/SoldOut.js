import { Link } from "react-router-dom";

function SoldOut() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sold Out</h1>
      <p>Unfortunately, tickets are not available.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default SoldOut;
