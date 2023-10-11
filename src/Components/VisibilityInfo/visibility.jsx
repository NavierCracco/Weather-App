import { useContext } from "react";
import styles from "./visibilityInfo.module.css";
import { dataContext } from "../../DataContext/dataContext";

function VisibilityInfo() {
  const { apiData } = useContext(dataContext);

  const visibility = apiData?.current?.vis_km;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.visibility}>visibilidad</p>
        <div className={styles.visibilityContainer}>
          <p className={styles.visibilityValue}>{visibility}</p>
          <span>km</span>
        </div>
      </div>
    </div>
  );
}

export default VisibilityInfo;
