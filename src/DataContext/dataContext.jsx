import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const dataContext = createContext();

const API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${
  import.meta.env.VITE_API_KEY
}&q=sauce%20viejo&days=7&aqi=no&alerts=no`;

const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get(API_WEATHER)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <dataContext.Provider value={{ apiData }}>{children}</dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataProvider, dataContext };
