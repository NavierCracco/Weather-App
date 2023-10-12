import PropTypes from "prop-types";
import styles from "./astro.module.css";

function Astro({ sunrise, sunset }) {
  return (
    <section className={styles.container}>
      <div className={styles.sunrise}>
        <p>Amanecer</p>
        <span>{sunrise}</span>
      </div>
      <div className={styles.sunset}>
        <p>Atardecer</p>
        <span>{sunset}</span>
      </div>
    </section>
  );
}

Astro.propTypes = {
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};

export default Astro;
