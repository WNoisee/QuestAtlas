import Button from "../../../../components/common/Button/Button";
import Icon from "../../../../components/common/Icon/Icon";
import Text from "../../../../components/common/Text/Text";
import { HOME_HERO, HOME_FEATURES } from "../../../../constants/texts";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroCopy}>
      <Text as="h1" size="hero" weight="bold" leading="tight">
        {HOME_HERO.TITLE}
      </Text>

      <Text
        as="p"
        size="lg"
        color="muted"
        leading="relaxed"
        className={styles.description}
      >
        {HOME_HERO.DESCRIPTION}
      </Text>

      <div className={styles.ctaRow}>
        <Button
          variant="primary"
          icon={<Icon symbol="rocket" size="md" />}
          iconPosition="left"
          size="lg"
        >
          {HOME_HERO.CTA_PRIMARY}
        </Button>

        <Button
          variant="secondary"
          icon={<Icon symbol="map" size="md" />}
          iconPosition="left"
          size="lg"
        >
          {HOME_HERO.CTA_SECONDARY}
        </Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <Text
            as="strong"
            size="lg"
            weight="bold"
            className={styles.statValue}
          >
            24+
            <span className={styles.iconWrapper}>
              <Icon
                symbol="location"
                size="sm"
                className={styles.iconGlow}
              />
            </span>
          </Text>

          <Text as="span" size="sm" color="muted" className={styles.statLabel}>
            {HOME_FEATURES.DESTINATIONS}
          </Text>
        </div>

        <div className={styles.statCard}>
          <Text
            as="strong"
            size="lg"
            weight="bold"
            className={styles.statValue}
          >
            12
            <span className={styles.iconWrapper}>
              <Icon
                symbol="compass"
                size="sm"
                className={styles.iconGlow}
              />
            </span>
          </Text>

          <Text as="span" size="sm" color="muted" className={styles.statLabel}>
            {HOME_FEATURES.SMART_ROUTE}
          </Text>
        </div>

        <div className={styles.statCard}>
          <Text
            as="strong"
            size="lg"
            weight="bold"
            className={styles.statValue}
          >
            AI
            <span className={styles.iconWrapper}>
              <Icon
                symbol="weather"
                size="sm"
                className={styles.iconGlow}
              />
            </span>
          </Text>

          <Text as="span" size="sm" color="muted" className={styles.statLabel}>
            {HOME_FEATURES.WEATHER_TRACKING}
          </Text>
        </div>
      </div>
    </section>
  );
}