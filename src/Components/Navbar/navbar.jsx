import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./navbar.module.css";

function Navbar() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangue = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submit");
  };

  return (
    <nav className={styles.nav}>
      <form>
        <div className={styles.group}>
          <input
            className={styles.input}
            placeholder="City"
            type="search"
            value={city}
            onChange={handleChangue}
            required
          />
          <button className={styles.button} onClick={handleSubmit}>
            {loading ? <ClipLoader /> : "Search"}
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
