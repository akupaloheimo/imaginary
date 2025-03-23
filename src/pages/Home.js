import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const testimonials = [
    "A hauntingly beautiful experience.",
    "Felt like I was in a post-apocalyptic movie!",
    "So much history left untouched. Must-see!",
    "An unforgettable journey into the past.",
    "Absolutely breathtaking and eerie!",
  ];

  const times = Array.from({ length: 31 }, (_, i) => 1995 + i);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % times.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <marquee
        className="marquee"
        style={{
          fontSize: "3rem",
          background:
            "-webkit-linear-gradient(left, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Reclaimed Worlds? A journey to abandoned places
      </marquee>
      <span>
        <h1>Home</h1>
        <h1 className="year">{times[index]}</h1>
      </span>

      <div>
        <p style={{ textAlign: "left", fontSize: "2rem" }}>
          What happens when humans leave a theme park for 30 years? <br />
          This exhibition lets you explore this forgotten world—while protecting
          it.
        </p>
      </div>
      <div className="opening-hours">
        <p style={{ textAlign: "left", fontWeight: "bold" }}>
          Opening hours all year 10-24. Visit only with prior booking of a
          private tour.
        </p>
      </div>
      <div className="opening-hours">
        <p style={{ textAlign: "left", fontWeight: "bold" }}>
          Location: 1234 Abandoned Theme Park, Earth
        </p>
      </div>
      <div
        className="button-container"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <p style={{ textAlign: "left", fontSize: "2rem" }}>
          Book your tour now and step into the forgotten world!
        </p>
        <Link to="/tickets" className="ticket-button">
          Tickets
        </Link>
      </div>
      <div
        className="button-container"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <p style={{ textAlign: "left", fontSize: "2rem" }}>
          Explore the map and see what awaits you!
        </p>
        <Link to="/map" className="ticket-button">
          Map
        </Link>
      </div>
      <div className="testimonials" style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "left" }}>Testimonials</h2>
        <p style={{ textAlign: "left" }}>
          {testimonials[index % testimonials.length]}
        </p>
      </div>
    </div>
  );
}

export default Home;
