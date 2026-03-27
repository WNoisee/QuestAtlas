import styles from "./ExploreCard.module.css";

function ExploreCard({ item, active = false, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.card} ${active ? styles.cardActive : ""}`}
      onClick={() => onClick?.(item)}
    >
      <div className={styles.cardTop}>
        <div>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.meta}>
            {item.category} • {item.duration}
          </p>
        </div>

        {item.badge && <span className={styles.badge}>{item.badge}</span>}
      </div>

      <p className={styles.description}>{item.description}</p>

      {item.weather && <div className={styles.weather}>Thời tiết: {item.weather}</div>}
    </button>
  );
}

export default ExploreCard;