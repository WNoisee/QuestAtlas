import Button from "../../../../components/common/Button/Button";
import Icon from "../../../../components/common/Icon/Icon";
import Text from "../../../../components/common/Text/Text";
import { HOME_HERO } from "../../../../constants/texts";
import styles from "./HeroSection.module.css";

const StatCardContent = ({ value, icon, label }) => (
  <div className={styles.statCard}>
    <Text
      as="strong"
      size="lg"
      weight="bold"
      className={styles.statValue}
    >
      {value}
      <span className={styles.iconWrapper}>
        <Icon
          symbol={icon}
          size="sm"
          className={styles.iconGlow}
        />
      </span>
    </Text>
    <Text as="span" size="sm" color="muted" className={styles.statLabel}>
      {label}
    </Text>
  </div>
);

const stats = [
  {
    value: "24+",
    icon: "location",
    label: "Điểm đến",
  },
  {
    value: "12",
    icon: "compass",
    label: "Lộ trình",
  },
  {
    value: "AI",
    icon: "weather",
    label: "Công nghệ",
  },
];

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
        {stats.map((stat) => (
          <StatCardContent key={stat.icon} {...stat} />
        ))}
      </div>
    </section>
  );
}
