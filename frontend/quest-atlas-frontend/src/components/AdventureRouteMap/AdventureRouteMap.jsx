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

export default function AdventureRouteMap({
  mapImage = "/maps/vietnam-adventure.png",
  stops = defaultStops,
  activeStopId: controlledActiveStopId,
  onSelectStop,
}) {
  const [internalActiveStopId, setInternalActiveStopId] = useState(stops[0]?.id);

  const activeStopId =
    controlledActiveStopId !== undefined
      ? controlledActiveStopId
      : internalActiveStopId;

  const activeStop = useMemo(
    () => stops.find((stop) => stop.id === activeStopId) || stops[0],
    [stops, activeStopId]
  );

  const handleSelect = (id) => {
    if (onSelectStop) {
      onSelectStop(id);
      return;
    }

    setInternalActiveStopId(id);
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={mapImage}
        alt="Vietnam adventure route map"
        className={styles.mapImage}
      />

      <div className={styles.stopLayer}>
        {stops.map((stop) => {
          const isActive = stop.id === activeStopId;

          return (
            <button
              key={stop.id}
              type="button"
              className={`${styles.stopButton} ${isActive ? styles.active : ""}`}
              style={{ left: stop.x, top: stop.y }}
              onClick={() => handleSelect(stop.id)}
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