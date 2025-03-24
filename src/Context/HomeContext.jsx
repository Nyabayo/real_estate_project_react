import React, { createContext, useState, useEffect } from "react";
import properties from "../data.jsx";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
    const [homes, setHomes] = useState(properties);
    const [county, setCounty] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");
    const [filteredHouses, setFilteredHouses] = useState([]);

    // Function to check if a filter is at its default value
    const isDefault = (value) => value === "default";

    // Function to handle filtering
    const handleSearch = () => {
        let minPrice = 0, maxPrice = Infinity;

        if (price !== "default") {
            [minPrice, maxPrice] = price.split("-").map(Number);
        }

        const newHouses = homes.filter((house) => {
            const housePrice = parseInt(house.price);
            return (
                (isDefault(county) || house.county === county) &&
                (isDefault(property) || house.propertyType === property) &&
                (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
            );
        });

        setFilteredHouses(newHouses);
    };

    // Load initial 6 houses
    useEffect(() => {
        setFilteredHouses(homes.slice(0, 6));
    }, [homes]);

    return (
        <HomeContext.Provider value={{ homes, county, setCounty, property, setProperty, price, setPrice, filteredHouses, handleSearch }}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;
