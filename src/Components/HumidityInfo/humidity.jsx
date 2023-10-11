import { useContext } from "react";
import styles from "./humidityInfo.module.css";
import { dataContext } from "../../DataContext/dataContext";

function HumidityInfo() {
  const { apiData } = useContext(dataContext);

  const humidity = apiData?.current?.humidity;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.humidity}>Humedad</p>
        <div className={styles.humidityContainer}>
          <p className={styles.humidityValue}>{humidity}</p>
          <span>%</span>
        </div>
        <div className={styles.barContainer}>
          <span>0</span>
          <div className={styles.bar}></div>
          <span>100 %</span>
        </div>
      </div>
    </div>
  );
}

export default HumidityInfo;
