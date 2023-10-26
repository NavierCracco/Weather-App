import { dataContext } from "../../DataContext/dataContext";
import { useContext } from "react";
import Card from "../Card/card";
import HumidityInfo from "../HumidityInfo/humidity";
import WindInfo from "../WindInfo/wind";
import VisibilityInfo from "../VisibilityInfo/visibility";
import AirPressureInfo from "../AirPressureInfo/airPressure";
import styles from "./weatherInfo.module.css";

function WeatherInfo() {
  const { apiData } = useContext(dataContext);

  if (apiData === null) {
    return;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.containerWeek}>
          {apiData?.forecast?.forecastday.map((day) => {
            const date = new Date(day.date);
            const dayName = date.toLocaleDateString("es-AR", {
              weekday: "long",
            });

            return (
              <Card
                key={day.date}
                date={dayName}
                day={day.day}
                avgTemp={day.day.avgtemp_c}
                maxTemp={day.day.maxtemp_c}
                minTemp={day.day.mintemp_c}
                icon={day.day.condition.icon}
                weather={day.day.condition.text}
              />
            );
          })}
        </div>
        <div className={styles.containerInfoDay}>
          <h3 className={styles.titleDayInfo}>Información del día</h3>
          <HumidityInfo />
          <WindInfo />
          <VisibilityInfo />
          <AirPressureInfo />
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
