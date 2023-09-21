import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <p>Created by </p>
        <p className={styles.name}> Navier Cracco</p>
      </div>
    </div>
  );
}

export default Footer;
