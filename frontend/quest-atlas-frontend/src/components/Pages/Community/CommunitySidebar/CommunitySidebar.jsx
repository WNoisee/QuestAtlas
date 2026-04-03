import styles from "./CommunitySidebar.module.css";
import {
  topTravelers,
  trendingDestinations,
} from "../../../../data/communityData";
import Button from "../../../common/Button/Button";
import Icon from "../../../common/Icon/Icon";
import Badge from "../../../common/Badge/Badge";

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

                <div className={styles.meta}>
                  <Badge
                      variant="starBadge"
                      label={
                        <>
                          <Icon symbol="star" size="xs" />
                          {traveler.stars} · {traveler.badge}
                        </>
                      }
                    />
                </div>
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

              <Button type="button" variant="engagement">
                Xem
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}