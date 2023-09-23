import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./navbar.module.css";
import axios from "axios";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${searchValue}&aqi=no`
      )
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className={styles.nav}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerSearch}>
          <input
            className={styles.input}
            placeholder="City"
            type="search"
            required
            value={searchValue}
            onChange={handleSearch}
          />
          <button className={styles.button}>
            {" "}
            <BiSearch />
          </button>
        </div>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.location.name}>{result.location.name}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
