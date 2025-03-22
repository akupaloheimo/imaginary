import { Link } from "react-router-dom";

function Tickets() {
  const ticketOptions = [
    {
      id: 1,
      name: "One Day Ticket",
      price: "$50",
      description: "Access to the event for one full day.",
    },
    {
      id: 2,
      name: "Three Day Ticket",
      price: "$120",
      description: "Access to the event for three days.",
    },
    {
      id: 3,
      name: "VIP Ticket",
      price: "$250",
      description: "Three-day access with exclusive perks and benefits.",
    },
  ];

  return (
    <div>
      <h1>Tickets</h1>
      <p>Buy your tickets here!</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {ticketOptions.map((ticket) => (
          <div
            key={ticket.id}
            className="ticket-card"
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              margin: "10px",
              width: "500px",
              textAlign: "center",
              backgroundColor: "rgba(162, 162, 162, 0.95)",
            }}
          >
            <h2>{ticket.name}</h2>
            <p>{ticket.description}</p>
            <p>
              <strong>{ticket.price}</strong>
            </p>
            <div className="ticket-button">
              <Link to={`/purchase/${ticket.id}`}>Buy Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
