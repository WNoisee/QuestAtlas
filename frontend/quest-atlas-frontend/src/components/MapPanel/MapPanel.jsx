import styles from "./MapPanel.module.css";

export default function MapPanel({ destinations }) {
  return (
    <section className={styles.mapPanel}>
      <div className={styles.mapHeader}>
        <div>
          <h3>Adventure Map</h3>
          <p>Prototype UI cho QuestAtlas</p>
        </div>
        <div className={styles.mapPill}>Live Preview</div>
      </div>

      <div className={styles.mapCanvas}>
        <svg className={styles.routeSvg} viewBox="0 0 1000 700" preserveAspectRatio="none">
          <path d="M120 150 C 220 120, 260 220, 340 210 S 500 180, 590 290 S 760 420, 860 380" className={styles.routeLine}/>
          <path d="M350 520 C 420 470, 470 420, 560 430 S 700 470, 760 560" className={`${styles.routeLine} ${styles.light}`}/>
        </svg>

        <div className={`${styles.mapGlow} ${styles.mapGlow1}`} />
        <div className={`${styles.mapGlow} ${styles.mapGlow2}`} />

        {destinations.map((item) => (
          <div
            key={item.id}
            className={styles.mapMarker}
            style={{ left: item.x, top: item.y }}
          >
            <div className={styles.pin}>
              <span />
            </div>
            <div className={styles.markerCard}>
              <strong>{item.name}</strong>
              <small>{item.type}</small>
            </div>
          </div>
        ))}

        <div className={`${styles.floatingCard} ${styles.weatherCard}`}>
          <span className={styles.cardLabel}>Weather Insight</span>
          <h4>Best window: 6:00 AM</h4>
          <p>Ít mưa, gió nhẹ, phù hợp cho hành trình khám phá.</p>
        </div>

        <div className={`${styles.floatingCard} ${styles.routeCard}`}>
          <span className={styles.cardLabel}>Suggested Route</span>
          <h4>North Loop Adventure</h4>
          <p>3 ngày · Mountain · Scenic stops · AI safe score 92%</p>
        </div>
      </div>
    </section>
  );
}