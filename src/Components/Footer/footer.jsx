import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <p>Created by </p>
        <p className={styles.name}> Navier Cracco</p>
      </div>
      <a
        className={styles.link}
        href="https://www.weatherapi.com/"
        title="Weather API"
      >
        WeatherAPI.com
      </a>
    </div>
  );
}

export default Footer;
