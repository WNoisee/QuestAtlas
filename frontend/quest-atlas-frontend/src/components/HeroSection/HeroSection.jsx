import Button from "../common/Button/Button";
import Icon from "../common/Icon/Icon";
import Text from "../common/Text/Text";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroCopy}>
      <Text as="h1" size="hero" weight="bold" leading="tight">
        Khám phá hành trình trên bản đồ thông minh
      </Text>

      <Text
        as="p"
        size="lg"
        color="muted"
        leading="relaxed"
        className={styles.description}
      >
        Lên kế hoạch chuyến đi, khám phá điểm đến và theo dõi thời tiết
        trong một trải nghiệm trực quan, liền mạch.
      </Text>

      <div className={styles.ctaRow}>
        <Button
          variant="primary"
          icon={<Icon symbol="rocket" size="md" />}
          iconPosition="left"
          size="lg"
        >
          Khám phá ngay
        </Button>

        <Button
          variant="secondary"
          icon={<Icon symbol="map" size="md" />}
          iconPosition="left"
          size="lg"
        >
          Xem hành trình
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
            Điểm đến
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
            Lộ trình thông minh
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
            Theo dõi thời tiết
          </Text>
        </div>
      </div>
    </section>
  );
}