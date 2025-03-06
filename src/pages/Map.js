import React from "react";
import "./Map.css"; // Ensure you create a CSS file for styles

function Map() {
  return (
    <div className="map-container">
      <marquee className="marquee">This is the Map page!</marquee>
      <div className="map-wrapper">
        <img src="/Näyttökuva 2025-03-04 112713.png" alt="Map Image" className="map-image" />

        {/* Clickable Areas */}
        <div className="map-area ferris-wheel" onClick={() => alert("Ferris Wheel Clicked!")}>
          Ferris Wheel
        </div>
        <div className="map-area entrance" onClick={() => alert("Entrance Clicked!")}>
          Entrance
        </div>
        <div className="map-area cafe" onClick={() => alert("Cafe Clicked!")}>
          Cafe
        </div>
        <div className="map-area outlet" onClick={() => alert("Outlet Clicked!")}>
          Outlet
        </div>
      </div>
    </div>
  );
}

export default Map;