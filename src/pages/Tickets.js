import { Link } from "react-router-dom";

function Tickets() {
  const ticketOptions = [
    {
      id: 1,
      name: "Private Day Tour",
      price: "$100",
      description: "Access to the exhibit during the day.",
    },
    {
      id: 2,
      name: "Private Night Tour",
      price: "$100",
      description: "Access to the event during the night.",
    },
    {
      id: 3,
      name: "VIP Tour",
      price: "$150",
      description: "Three-day access with exclusive perks and benefits.",
    },
  ];

  return (
    <div>
      <h1>Tickets</h1>
      <p>Buy your tickets here!</p>
      <p>
        To ensure that the exhibiton is protected we are offering private tours
        of the space. <br></br>All necessary gear is included in the ticet
        price.
      </p>
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
            <div>
              <Link to="/sold-out" className="ticket-button">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
