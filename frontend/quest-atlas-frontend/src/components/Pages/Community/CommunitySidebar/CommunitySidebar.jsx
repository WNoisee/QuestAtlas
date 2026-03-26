import styles from "./CommunitySide.module.css";
import {
  topTravelers,
  trendingDestinations,
} from "../../../../data/communityData";
import Button from "../../../common/Button/Button";
import Icon from "../../../common/Icon/Icon";

export default function CommunitySidebar() {
  return (
    <div className={styles.sidebar}>
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>Nhà lữ hành nổi bật</h3>
          <span>Tuần này</span>
        </div>

        <div className={styles.list}>
          {topTravelers.map((traveler, index) => (
            <div key={traveler.id} className={styles.listItem}>
              <div className={styles.rank}>{index + 1}</div>

              <div className={styles.itemContent}>
                <strong>{traveler.name}</strong>
                <span className={styles.itemContent}>
                  <Icon symbol="star" size="13" color="primary"></Icon> 
                  <div>{traveler.stars} · {traveler.badge}</div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>Điểm đến nổi bật</h3>
          <span>Đang hot</span>
        </div>

        <div className={styles.list}>
          {trendingDestinations.map((destination) => (
            <div key={destination.id} className={styles.destinationItem}>
              <div>
                <strong>{destination.name}</strong>
                <span>{destination.weather}</span>
              </div>

              <Button type="button" variant="action">Xem</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}