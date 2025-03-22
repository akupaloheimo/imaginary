import React, { useState } from "react";
import "./Map.css"; // Ensure you have styles for the modal

function Map() {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);

  const locations = {
    "ferris-wheel": ["/ferris1.jpg", "/ferris2.jpg"],
    entrance: ["/earth1.jpg", "/earth2.jpg"],
    cafe: ["/hotel1.jpg", "/hotel2.jpg"],
    outlet: ["/outlet1.jpg", "/outlet2.jpg"],
  };

  const openModal = (location) => {
    setImages(locations[location]);
    setModalOpen(true);
  };

  return (
    <div className="content">
      <div className="map-container">
        <div className="map-wrapper">
          <img src="/MAP.jpg" alt="Map" className="map-image" />

          <div
            className="map-area ferris-wheel"
            onClick={() => openModal("ferris-wheel")}
          >
            Ferris Wheel
          </div>
          <div
            className="map-area entrance"
            onClick={() => openModal("entrance")}
          >
            Entrance
          </div>
          <div className="map-area cafe" onClick={() => openModal("cafe")}>
            Hotel
          </div>
          <div className="map-area outlet" onClick={() => openModal("outlet")}>
            Outlet
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <div className="image-container">
              <img src={images[0]} alt="Location 1" className="modal-image" />
              <img src={images[1]} alt="Location 2" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
