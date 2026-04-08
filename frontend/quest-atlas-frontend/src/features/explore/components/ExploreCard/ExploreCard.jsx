import CardButton from "../../../../components/common/CardButton/CardButton";
import Badge from "../../../../components/layout/Badge/Badge";
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
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.meta}>
            {item.category} • {item.duration}
          </p>
        </div>

        {item.badge && (
          <Badge
            label={item.badge}
            variant="soft"
            tone="highlight"
          />
        )}
      </div>

      <p className={styles.description}>{item.description}</p>

      {item.weather && (
        <div className={styles.weather}>
          Thời tiết: {item.weather}
        </div>
      )}
    </CardButton>
  );
}