import { useContext } from "react";
import { dataContext } from "../../DataContext/dataContext";
import styles from "./windInfo.module.css";

function WindInfo() {
  const { apiData } = useContext(dataContext);

  const wind = apiData?.current?.wind_kph;
  const windDirection = apiData?.current?.wind_dir;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.windStatus}>Wind Status</p>
        <div className={styles.windContainer}>
          <p className={styles.wind}>{wind}</p>
          <span>km/h</span>
        </div>
        <div className={styles.directionContainer}>
          <span className={styles.direction}>{windDirection}</span>
        </div>
      </div>
    </div>
  );
}

export default WindInfo;
