import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const times = [
    1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % times.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <marquee className="marquee">
        Reclaimed Worlds? A journey to abandoned places
      </marquee>
      <h1 className="year">{times[index]}</h1>
      <div>
        <p>
          What happens when humans leave a theme park for 30 years? <br></br>
          This exhibition lets you explore this forgotten world—while protecting
          it.
        </p>
      </div>
      <div className="opening-hours">
        <p>
          Opening hours all year 10-24 Visit only with prior booking of a
          private tour.
        </p>
      </div>
      <div className="opening-hours">
        <p>Location: 1234 Abandoned Theme Park, Earth</p>
      </div>
      <div className="button-container">
        <p>Book your tour now and step into the forgotten world!</p>
        <Link to="/tickets" className="ticket-button">
          Tickets
        </Link>
      </div>
      <div classNmae="button-container">
        <p>Explore the map and see what awaits you!</p>
        <Link to="/map" className="ticket-button">
          Map
        </Link>
      </div>
    </div>
  );
}

export default Home;
