import PropTypes from "prop-types";
import styles from "./card.module.css";

function Card({ date, avgTemp, maxTemp, minTemp, icon, weather }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.date}>{date}</p>
        <p className={styles.weather}>{weather}</p>
        <img src={icon} alt={weather} className={styles.icon} />
        <p className={styles.temp}>{avgTemp}°</p>
        <div className={styles.minmaxContainer}>
          <div className={styles.min}>
            <p className={styles.minHeading}>Min</p>
            <p className={styles.minTemp}>{minTemp}°</p>
          </div>
          <div className={styles.max}>
            <p className={styles.maxHeading}>Max</p>
            <p className={styles.maxTemp}>{maxTemp}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.string.isRequired,
  avgTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default Card;
