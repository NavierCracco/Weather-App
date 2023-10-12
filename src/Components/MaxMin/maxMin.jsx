import PropTypes from "prop-types";
import styles from "./maxMin.module.css";

function FeelsLike({ locationName, maxTemp, minTemp }) {
  return (
    <section className={styles.container}>
      <h5 className={styles.titleCity}>{locationName}</h5>
      <span>
        {maxTemp}° / {minTemp}°
      </span>
    </section>
  );
}
FeelsLike.propTypes = {
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
};
export default FeelsLike;
