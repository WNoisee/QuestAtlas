import styles from "./MapPanel.module.css";
import AdventureRouteMap from "../AdventureRouteMap/AdventureRouteMap";
import Badge from "../common/Badge/Badge";

export default function MapPanel() {
  return (
    <section className={styles.mapPanel}>
      <header className={styles.mapHeader}>
        <div>
          <h3>Bản đồ khám phá</h3>
          <p>Hành trình của bạn được thể hiện trực quan trên bản đồ</p>
        </div>
        <Badge label="Xem trước" className="previewBadge" indicator="previewDot"/>
      </header>

      <div className={styles.mapCanvas}>
        <AdventureRouteMap />
      </div>
    </section>
  );
}