import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext.jsx";
import "./EstateList.css";

const EstateList = () => {
  const { filteredHouses } = useContext(HomeContext);

  return (
    <div className="estate-list">
      <h2 className="estate-title">Available Properties</h2>
      <div className="property-grid">
        {filteredHouses.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} className="property-image" />
            <div className="property-details">
              <h3 className="property-name">
                <Link to={`/home/${property.id}`}>{property.name}</Link>
              </h3>
              <p className="property-type">Type: {property.propertyType}</p>
              <p className="property-price">Price: Ksh {property.price.toLocaleString()}</p>
              <p className="property-location">Location: {property.county}</p>
              <p className="property-rooms">Rooms: {property.rooms} | Beds: {property.beds}</p>
              <p className="property-description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstateList;
