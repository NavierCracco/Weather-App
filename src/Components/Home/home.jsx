import { useContext } from "react";
import { dataContext } from "../../DataContext/dataContext";
import { BiMap } from "react-icons/bi";
import dayjs from "dayjs";
import "dayjs/locale/es";
import WeatherInfo from "../WeatherInfo/weather.jsx";
import Navbar from "../Navbar/navbar";
import FeelsLike from "../MaxMin/maxMin";
import Astro from "../Astro/astro";
import Schedule from "../Schedule/schedule";
import styles from "./home.module.css";

function Home() {
  const { apiData } = useContext(dataContext);
  const iconClima = apiData?.current?.condition?.icon;

  const temperature = apiData?.current?.temp_c;
  const minTemp = apiData?.forecast?.forecastday[0]?.day?.mintemp_c;
  const maxTemp = apiData?.forecast?.forecastday[0]?.day?.maxtemp_c;
  const feelsLike = apiData?.current?.feelslike_c;

  const climaText = apiData?.current?.condition?.text;

  const date = apiData?.location?.localtime;
  const formatDay = dayjs(date).locale("es").format("DD/MM/YYYY - dddd");

  const locationName = apiData?.location?.name;
  const locationRegion = apiData?.location?.region;

  const sunrise = apiData?.forecast?.forecastday[0]?.astro?.sunrise;
  const sunset = apiData?.forecast?.forecastday[0]?.astro?.sunset;

  if (apiData === null) {
    return (
      <main className={styles.main}>
        <div className={styles.containerNull}>
          <Navbar />
          <h1 className={styles.titleEnterCity}>
            Ingrese una ciudad...
            <BiMap className={styles.iconEnterCity} />
          </h1>
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerNavbarInfo}>
            <Navbar />
            <div className={styles.containerTempIcon}>
              <div>
                <div className={styles.containerTemp}>
                  <h1 className={styles.temp}>{temperature}</h1>
                  <span className={styles.celsius}>°C</span>
                </div>
                <p className={styles.climaText}>{climaText}</p>
              </div>
              <img
                src={iconClima}
                alt={climaText}
                className={styles.iconClima}
              />
            </div>
            <section className={styles.containerMaxMin}>
              <FeelsLike
                maxTemp={maxTemp}
                minTemp={minTemp}
                locationName={locationName}
              />
              <Astro sunrise={sunrise} sunset={sunset} />
            </section>
            <div className={styles.containerFeelsLike}>
              <p className={styles.feelsLike}>Sensación térmica {feelsLike}°</p>
            </div>
          </div>
          <Schedule />
          <section className={styles.containerData}>
            <span className={styles.data}>{formatDay}</span>
            <span className={styles.location}>
              {locationName} - {locationRegion}
            </span>
          </section>
        </div>
        <WeatherInfo />
      </main>
    );
  }
}

export default Home;
