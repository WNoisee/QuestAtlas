import AdventureRouteMap from "../../../AdventureRouteMap/AdventureRouteMap";
import { defaultStops } from "../../../../data/defaultStops";
import styles from "./ExploreMapPanel.module.css";

function ExploreMapPanel({ selectedItem, onSelectItem }) {
  const matchedStop = defaultStops.find(
    (stop) => stop.name.toLowerCase() === selectedItem?.name?.toLowerCase()
  );

  return (
    <section className={styles.panel}>
      <div className={styles.panelHead}>
        <div>
          <span className={styles.label}>Bản đồ khám phá</span>
          <h2 className={styles.title}>Hành trình trực quan</h2>
          <p className={styles.description}>
            Theo dõi các điểm đến và chọn nhanh cung đường phù hợp với phong cách khám phá của bạn.
          </p>
        </div>

        <button type="button" className={styles.previewButton}>
          Xem trước
        </button>
      </div>

      <div className={styles.mapWrap}>
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
    </section>
  );
}

export default ExploreMapPanel;