import Button from "../../../common/Button/Button";
import styles from "./ExploreCard.module.css";

function ExploreCard({ item, active = false, onClick }) {
  return (
    <Button
      type="button"
      variant="exploreCard"
      active={active}
      onClick={() => onClick?.(item)}
    >
      <div className={styles.top}>
        <div>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.meta}>
            {item.category} • {item.duration}
          </p>
        </div>

        {item.badge && <span className={styles.badge}>{item.badge}</span>}
      </div>

      <p className={styles.description}>{item.description}</p>

      {item.weather && (
        <div className={styles.weather}>
          Thời tiết: {item.weather}
        </div>
      )}
    </Button>
  );
}

export default ExploreCard;