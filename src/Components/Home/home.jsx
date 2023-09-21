import { useContext } from "react";
import { dataContext } from "../../DataContext/dataContext";
import dayjs from "dayjs";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

function Home() {
  const { apiData } = useContext(dataContext);

  const iconClima = apiData?.current?.condition?.icon;

  const temperature = apiData?.current?.temp_c;
  const climaText = apiData?.current?.condition?.text;

  const date = apiData?.location?.localtime;
  const formatDay = dayjs(date).format("DD/MM/YYYY - dddd");

  const locationName = apiData?.location?.name;
  const locationRegion = apiData?.location?.region;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <img src={iconClima} alt={climaText} className={styles.iconClima} />
        <div className={styles.containerTemp}>
          <h1 className={styles.temp}>{temperature}</h1>
          <span className={styles.celsius}>°C</span>
        </div>
        <p className={styles.climaText}>{climaText}</p>
        <div className={styles.containerData}>
          <span className={styles.data}>{formatDay}</span>
          <span className={styles.location}>
            {locationName} - {locationRegion}
          </span>
        </div>
      </div>
    </main>
  );
}

export default Home;
