import styles from "./MapPanel.module.css";
import AdventureRouteMap from "../AdventureRouteMap/AdventureRouteMap";

export default function MapPanel() {
  return (
    <section className={styles.mapPanel}>
      <header className={styles.mapHeader}>
        <div>
          <h3>Adventure Map</h3>
          <p>Prototype UI cho QuestAtlas</p>
        </div>
        <div className={styles.mapPill}>Live Preview</div>
      </header>

      <div className={styles.mapCanvas}>
        <AdventureRouteMap />
      </div>
    </section>
  );
}