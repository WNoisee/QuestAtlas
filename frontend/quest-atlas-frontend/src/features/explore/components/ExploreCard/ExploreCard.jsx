import CardButton from "../../../../components/common/CardButton/CardButton";
import Badge from "../../../../components/common/Badge/Badge";
import styles from "./ExploreCard.module.css";

export default function ExploreCard({ item, active = false, onClick }) {
  return (
    <CardButton active={active} onClick={() => onClick?.(item)}>
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