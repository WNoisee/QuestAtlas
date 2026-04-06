import styles from "./AwardsHero.module.css";
import Badge from "../../../../components/common/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import { AWARDS_HERO, AWARDS_STATS } from "../../../../constants/texts";

export default function AwardsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label={AWARDS_HERO.BADGE} variant="soft" />

        <Text as="h1" size="2xl" weight="bold" leading="tight">
          {AWARDS_HERO.TITLE}
        </Text>

        <Text size="md" weight="regular" leading="relaxed" color="muted">
          {AWARDS_HERO.DESCRIPTION}
        </Text>
      </div>

      <div className={styles.statsCard}>
        <div className={styles.statsContent}>
          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {AWARDS_STATS.STAT_BADGES}
            </Text>
            <Text size="sm" weight="medium" color="muted">
              {AWARDS_STATS.AVAILABLE_BADGES}
            </Text>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {AWARDS_STATS.STAT_EXPLORERS}
            </Text>
            <Text size="sm" weight="medium" color="muted">
              {AWARDS_STATS.EXPLORER_LABEL}
            </Text>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {AWARDS_STATS.STAT_LOCATIONS}
            </Text>
            <Text size="sm" weight="medium" color="muted">
              {AWARDS_STATS.LOCATIONS_LABEL}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
