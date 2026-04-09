import AdventureRouteMap from "../../../home/components/AdventureRouteMap/AdventureRouteMap";
import { defaultStops } from "../../data/defaultStops";
import styles from "./ExploreMapPanel.module.css";

function ExploreMapPanel({ selectedItem, onSelectItem }) {
  // Only show destination markers on the map
  // If selectedItem is a route or AI suggestion, find the best matching destination
  // Otherwise, use the selectedItem directly
  const isDestinationItem = selectedItem?.id && selectedItem.id <= 100;
  
  let mapMarkerItem = null;
  
  if (isDestinationItem) {
    // If it's a destination (id <= 100), use it directly
    mapMarkerItem = selectedItem;
  } else if (selectedItem) {
    // If it's a route or AI suggestion, try to find a related destination
    // For now, just default to the first destination
    mapMarkerItem = defaultStops[0] || null;
  } else {
    mapMarkerItem = defaultStops[0] || null;
  }

  const matchedStop = defaultStops.find(
    (stop) => stop.name.toLowerCase() === mapMarkerItem?.name?.toLowerCase()
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