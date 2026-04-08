import styles from "./MapPanel.module.css";
import AdventureRouteMap from "../AdventureRouteMap/AdventureRouteMap";
import Badge from "../../../../components/layout/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import { HOME_MAP } from "../../../../constants/texts";

export default function MapPanel() {
  return (
    <section className={styles.mapPanel}>
      <header className={styles.mapHeader}>
        <div className={styles.mapInfo}>
          <Text as="h3" size="xl" weight="bold">
            {HOME_MAP.TITLE}
          </Text>

          <Text
            as="p"
            size="sm"
            color="muted"
            leading="normal"
            className={styles.mapDescription}
          >
            {HOME_MAP.DESCRIPTION}
          </Text>
        </div>

        <Badge
          label={HOME_MAP.PREVIEW_BTN}
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