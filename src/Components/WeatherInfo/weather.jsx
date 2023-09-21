import { dataContext } from "../../DataContext/dataContext";
import { useContext } from "react";
import Card from "../Card/card";
import HumidityInfo from "../HumidityInfo/humidity";
import WindInfo from "../WindInfo/wind";
import VisibilityInfo from "../VisibilityInfo/visibility";
import AirPressureInfo from "../AirPressureInfo/airPressure";
import styles from "./weatherInfo.module.css";

function WeatherInfo() {
  const { weekData } = useContext(dataContext);

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerWeek}>
        {weekData?.forecast?.forecastday.map((day) => {
          const date = new Date(day.date);
          const dayName = date.toLocaleDateString("en", {
            weekday: "long",
          });

          if (date >= tomorrowDate) {
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
          }
        })}
      </div>
      <div className={styles.containerInfoDay}>
        <h3 className={styles.titleDayInfo}>Today´s Hightlights</h3>
        <HumidityInfo />
        <WindInfo />
        <VisibilityInfo />
        <AirPressureInfo />
      </div>
    </div>
  );
}
export default WeatherInfo;