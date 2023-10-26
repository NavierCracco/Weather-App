import { useState } from "react";
import { useContext } from "react";
import { dataContext } from "../../DataContext/dataContext";
import { BiSearch } from "react-icons/bi";
import styles from "./navbar.module.css";

function Navbar() {
  const { fetchWeather } = useContext(dataContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(inputValue);
  };

  return (
    <nav className={styles.nav}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerSearch}>
          <input
            className={styles.input}
            placeholder="Ciudad"
            type="search"
            required
            value={inputValue}
            onChange={handleSearch}
          />
          <button className={styles.button} type="submit">
            {" "}
            <BiSearch />
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
