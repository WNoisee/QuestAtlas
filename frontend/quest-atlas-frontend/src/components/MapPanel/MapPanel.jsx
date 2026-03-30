import styles from "./MapPanel.module.css";
import AdventureRouteMap from "../AdventureRouteMap/AdventureRouteMap";
import Badge from "../common/Badge/Badge";
import Text from "../common/Text/Text";

export default function MapPanel() {
  return (
    <section className={styles.mapPanel}>
      <header className={styles.mapHeader}>
        <div className={styles.mapInfo}>
          <Text as="h3" size="xl" weight="bold">
            Bản đồ khám phá
          </Text>

          <Text
            as="p"
            size="sm"
            color="muted"
            leading="normal"
            className={styles.mapDescription}
          >
            Hành trình của bạn được thể hiện trực quan trên bản đồ
          </Text>
        </div>

        <Badge
          label="Xem trước"
          variant="soft"
          indicator="dot"
          tone="warning"
          glow
        />
      </header>

      <div className={styles.mapCanvas}>
        <AdventureRouteMap />
      </div>
    </section>
  );
}