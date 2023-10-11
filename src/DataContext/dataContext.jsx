import { PropTypes } from "prop-types";
import { createContext, useState } from "react";
import axios from "axios";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const fetchWeather = (city) => {
    const codifiedCity = encodeURIComponent(city);
    const API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${
      import.meta.env.VITE_API_KEY
    }&q=${codifiedCity}&days=7&aqi=no&alerts=no&lang=es`;

    axios
      .get(API_WEATHER)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <dataContext.Provider
      value={{ apiData, searchValue, setSearchValue, fetchWeather }}
    >
      {children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataProvider, dataContext };
