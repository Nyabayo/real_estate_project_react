import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext.jsx";
import "./EstateDetails.css";

const EstateDetails = () => {
  const { id } = useParams();
  const { filteredHouses } = useContext(HomeContext);

  const property = filteredHouses.find((house) => house.id === parseInt(id));

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="estate-details">
      <div className="estate-header">
        <img src={property.image} alt={property.name} className="estate-image" />
        <h2 className="estate-title">{property.name}</h2>
      </div>
      <div className="estate-info">
        <p><strong>Type:</strong> {property.propertyType}</p>
        <p><strong>Price:</strong> Ksh {property.price.toLocaleString()}</p>
        <p><strong>Location:</strong> {property.county}</p>
        <p><strong>Rooms:</strong> {property.rooms} | Beds: {property.beds}</p>
        <p className="estate-description">{property.description}</p>
      </div>

      {/* Booking Form */}
      <div className="booking-form">
        <h3>Book an Inspection</h3>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Preferred Date:</label>
          <input type="date" required />

          <label>Message:</label>
          <textarea placeholder="Enter your message" rows="4"></textarea>

          <button type="submit">Book Inspection</button>
        </form>
      </div>
    </div>
  );
};

export default EstateDetails;