import { Link } from "react-router-dom";

function Tickets() {
  return (
    <div>
      <h1>Tickets</h1>
      <p>Buy your tickets here!</p>
      <div></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <span>
          <div className="ticket-button">
            <Link>One Day Ticket</Link>
          </div>
          <div className="ticket-button">
            <Link>Three Day Ticket</Link>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Tickets;
