import AdventureRouteMap from "../../../AdventureRouteMap/AdventureRouteMap";
import { defaultStops } from "../../../../data/defaultStops";
import styles from "./ExploreMapPanel.module.css";

function ExploreMapPanel({ selectedItem, onSelectItem }) {
  const matchedStop = defaultStops.find(
    (stop) => stop.name.toLowerCase() === selectedItem?.name?.toLowerCase()
  );

  return (
    <div className={styles.mapPanel}>
      <AdventureRouteMap
        selectedStopId={matchedStop?.id}
        onSelectStop={(stopId) => {
          const stop = defaultStops.find((item) => item.id === stopId);
          if (!stop) return;

          onSelectItem?.({
            id: stop.id,
            name: stop.name,
            category: stop.type,
            duration: stop.duration,
            description: stop.description,
          });
        }}
      />
    </div>
  );
}

export default ExploreMapPanel;