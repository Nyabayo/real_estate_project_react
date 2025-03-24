import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { HomeContext } from "../../Context/HomeContext.jsx";
import './Search.css';

const Search = () => {
  const { county, setCounty, property, setProperty, price, setPrice, handleSearch, homes } = useContext(HomeContext);

  return (
    <div className="filter-container">
      {/* Location Filter */}
      <div className="filter-item">
        <FaMapMarkerAlt className="icon" />
        <div>
          <p>Location</p>
          <select value={county} onChange={(e) => setCounty(e.target.value)}>
            <option value="default">All Locations</option>
            {[...new Set(homes.map((home) => home.county))].map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Property Type Filter */}
      <div className="filter-item">
        <p>Property Type</p>
        <select value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="default">All Types</option>
          {[...new Set(homes.map((home) => home.propertyType))].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-item">
        <p>Price Range</p>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="default">No limit</option>
          <option value="0-50000">Up to 50,000</option>
          <option value="50000-100000">50,000 - 100,000</option>
          <option value="100000-150000">100,000 - 150,000</option>
          <option value="150000-200000">150,000 - 200,000</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="search-btn" onClick={handleSearch}>
        <FaSearch className="search-icon" /> Search
      </button>
    </div>
  );
};

export default Search;
