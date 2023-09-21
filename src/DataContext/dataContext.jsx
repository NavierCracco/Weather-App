import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const dataContext = createContext();

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=sauce%20viejo&aqi=no`;

const WEEK_API_WEATHER = `https://api.weatherapi.com/v1/forecast.json?key=${
  import.meta.env.VITE_API_KEY
}&q=sauce%20viejo&days=7&aqi=no&alerts=no`;

const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [weekData, setWeekData] = useState(null);

  useEffect(() => {
    axios
      .get(API_WEATHER)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const getWeatherForescast = () => {
      axios
        .get(WEEK_API_WEATHER)
        .then((response) => {
          setWeekData(response.data);
        })
        .catch((err) => console.error(err));
    };
    getWeatherForescast();
  }, []);
  return (
    <dataContext.Provider value={{ apiData, weekData }}>
      {children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataProvider, dataContext };
