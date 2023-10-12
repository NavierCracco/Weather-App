import PropTypes from "prop-types";
import { BiDroplet } from "react-icons/bi";
import styles from "./hour.module.css";

function Hour({ time, icon, condition, temp, humidity }) {
  return (
    <div className={styles.container}>
      <span className={styles.hour}>{time}</span>

      <div className={styles.tempContainer}>
        <img src={icon} alt={condition} className={styles.icon} />
        <p className={styles.temp}>{temp}°</p>
      </div>

      <div className={styles.humidityContainer}>
        <BiDroplet className={styles.humidityIcon} />
        <span className={styles.humidity}>{humidity}%</span>
      </div>
    </div>
  );
}

Hour.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default Hour;
