import styles from "./BrandingPanel.module.css";
import Text from "../../../../components/common/Text/Text";
import Icon from "../../../../components/common/Icon/Icon";
import { AUTH_TEXTS } from "../../../../constants/texts";

const highlights = [
  { symbol: "compass", label: AUTH_TEXTS.FEATURE_EXPLORATION },
  { symbol: "globe", label: AUTH_TEXTS.FEATURE_ROUTE },
  { symbol: "location", label: AUTH_TEXTS.FEATURE_COMMUNITY },
];

export default function BrandingPanel() {
  return (
    <section className={styles.brandingPanel}>
      <div className={styles.badge}>{AUTH_TEXTS.BRAND}</div>

      <div className={styles.heroCopy}>
        <Text as="h1" size="xl" weight="bold">{AUTH_TEXTS.PAGE_TITLE}</Text>
        <Text as="p" size="md" color="muted">{AUTH_TEXTS.PAGE_SUBTITLE}</Text>
      </div>

      <div className={styles.features}>
        {highlights.map(({ symbol, label }) => (
          <div key={label} className={styles.featureItem}>
            <Icon symbol={symbol} size="sm" className={styles.featureIcon} />
            <Text as="span" size="sm">{label}</Text>
          </div>
        ))}
      </div>

      <div className={styles.bottomCard}>
        <Text as="span" size="md" weight="medium">{AUTH_TEXTS.BOTTOM_CARD}</Text>
      </div>
      <div className={styles.floatingRoute} />
    </section>
  );
}
