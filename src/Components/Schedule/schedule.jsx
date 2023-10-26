import { useContext } from "react";
import { dataContext } from "../../DataContext/dataContext";
import Hour from "../Hour/hour";
import styles from "./schedule.module.css";

function Schedule() {
  const { apiData } = useContext(dataContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.scheduleText}>
        <p>Por hora</p>
      </div>
      <section className={styles.container}>
        {apiData?.forecast?.forecastday[0]?.hour.map((hour) => {
          const timeParts = hour.time.split(" ");
          const time = timeParts[1];

          return (
            <Hour
              hour={hour}
              key={hour.time_epoch}
              time={time}
              icon={hour.condition.icon}
              condition={hour.condition.text}
              temp={hour.temp_c}
              humidity={hour.humidity}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Schedule;
