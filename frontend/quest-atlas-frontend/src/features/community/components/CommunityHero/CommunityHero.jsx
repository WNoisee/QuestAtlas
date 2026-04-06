import styles from "./CommunityHero.module.css";
import Badge from "../../../../components/common/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import { COMMUNITY_HERO, COMMUNITY_STATS } from "../../../../constants/texts";
import { MapPin, Users, Compass } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label={COMMUNITY_HERO.BADGE} variant="soft" />

        <Text as="h1" size="xl" weight="bold" line="tight" className={styles.heading}>
          {COMMUNITY_HERO.TITLE}
        </Text>

        <Text size="md" weight="regular" line="relaxed" color="muted" className={styles.subheading}>
          {COMMUNITY_HERO.DESCRIPTION}
        </Text>

        <button className={styles.ctaButton}>
          <span>{COMMUNITY_HERO.CTA_BUTTON}</span>
        </button>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.heroCardTop}>
          <Badge label={COMMUNITY_HERO.STATS_BADGE} variant="soft" />
          <Text size="sm" weight="medium" line="normal" color="muted">
            {COMMUNITY_HERO.STATS_QUOTE}
          </Text>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight" className={styles.statValue}>
              1.2K+
            </Text>
            <Text size="sm" weight="medium" line="normal" className={styles.statLabel}>
              {COMMUNITY_STATS.POSTS_LABEL}
            </Text>
          </div>

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight">
              320+
            </Text>
            <Text size="sm" weight="medium" line="normal" className={styles.statLabel}>
              {COMMUNITY_STATS.TRAVELERS_LABEL}
            </Text>
          </div>

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight">
              48+
            </Text>
            <Text size="sm" weight="medium" line="normal">
              {COMMUNITY_STATS.HOT_DESTINATIONS}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}