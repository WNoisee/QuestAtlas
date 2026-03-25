import { useMemo, useState } from "react";
import styles from "./AdventureRouteMap.module.css";
import { defaultStops } from "../../data/defaultStops";

function getCardPosition(stop) {
  const x = parseFloat(stop.x);
  const y = parseFloat(stop.y);

  let horizontal = "right";
  let vertical = "center";

  if (x > 70) horizontal = "left";
  if (y > 72) vertical = "top";
  else if (y < 18) vertical = "bottom";

  return `${horizontal}-${vertical}`;
}

export default function AdventureRouteMap() {
  const [activeStopId, setActiveStopId] = useState(defaultStops[0]?.id);

  const activeStop = useMemo(
    () => defaultStops.find((stop) => stop.id === activeStopId) || defaultStops[0],
    [activeStopId]
  );

  return (
    <div className={styles.wrapper}>
      <img
        src="/maps/vietnam-adventure.png"
        alt="Vietnam adventure route map"
        className={styles.mapImage}
      />

      <div className={styles.stopLayer}>
        {defaultStops.map((stop) => {
          const isActive = stop.id === activeStopId;

          return (
            <button
              key={stop.id}
              type="button"
              className={`${styles.stopButton} ${isActive ? styles.active : ""}`}
              style={{ left: stop.x, top: stop.y }}
              onClick={() => setActiveStopId(stop.id)}
              aria-label={stop.name}
            >
              <span className={styles.stopDot} />
              <span className={styles.stopDuration}>{stop.duration}</span>
            </button>
          );
        })}
      </div>

      {activeStop && (
        <div
          className={`${styles.infoCard} ${styles[getCardPosition(activeStop)]}`}
          style={{ left: activeStop.x, top: activeStop.y }}
        >
          <strong>{activeStop.name}</strong>
          <small>{activeStop.type}</small>
          <p>{activeStop.description}</p>
        </div>
      )}
    </div>
  );
}