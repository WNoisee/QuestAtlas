import CardButton from "../../../../components/common/CardButton/CardButton";
import Badge from "../../../../components/layout/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import styles from "./ExploreCard.module.css";

const getCategoryClass = (category) => {
  const categoryMap = {
    "Núi": "mountain",
    "Biển": "beach",
    "Thiên nhiên": "beach",
    "Văn hóa": "culture",
    "Chill": "chill",
    "Phiêu lưu": "adventure",
  };
  return categoryMap[category] || "default";
};

export default function ExploreCard({ item, active = false, onClick }) {
  const categoryClass = getCategoryClass(item.category);
  
  return (
    <CardButton 
      active={active} 
      onClick={() => onClick?.(item)}
      className={styles[`category-${categoryClass}`]}
    >
      <div className={styles.cardTop}>
        <div>
          <Text as="h3" size="md" weight="bold" className={styles.title}>{item.name}</Text>
          <Text as="p" size="sm" color="muted" className={styles.meta}>
            {item.category} • {item.duration}
          </Text>
        </div>

        {item.badge && (
          <Badge
            className={styles.badge}
            label={item.badge}
            variant="soft"
            tone="highlight"
          />
        )}
      </div>

      <Text as="p" size="sm" className={styles.description}>{item.description}</Text>

      {item.weather && (
        <div className={styles.weather}>
          Thời tiết: {item.weather}
        </div>
      )}
    </CardButton>
  );
}