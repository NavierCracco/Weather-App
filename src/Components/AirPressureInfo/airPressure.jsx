import { useContext } from "react";
import styles from "./airPressure.module.css";
import { dataContext } from "../../DataContext/dataContext";

function AirPressureInfo() {
  const { apiData } = useContext(dataContext);

  const pressure = apiData?.current?.pressure_mb;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.airPressure}>Air Pressure</p>
        <div className={styles.airPressureContainer}>
          <p className={styles.airPressureValue}>{pressure}</p>
          <span>mb</span>
        </div>
      </div>
    </div>
  );
}

export default AirPressureInfo;
