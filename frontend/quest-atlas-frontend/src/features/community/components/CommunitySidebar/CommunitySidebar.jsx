import styles from "./CommunitySidebar.module.css";
import {
  topTravelers,
  trendingDestinations,
} from "../../data/communityData";
import Button from "../../../../components/common/Button/Button";
import Icon from "../../../../components/common/Icon/Icon";
import Badge from "../../../../components/common/Badge/Badge";
import { COMMUNITY_SIDEBAR } from "../../../../constants/texts";

export default function CommunitySidebar() {
  return (
    <div className={styles.sidebar}>
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>{COMMUNITY_SIDEBAR.TOP_TRAVELERS_TITLE}</h3>
          <span>{COMMUNITY_SIDEBAR.TOP_TRAVELERS_PERIOD}</span>
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
          <h3>{COMMUNITY_SIDEBAR.TRENDING_DESTINATIONS}</h3>
          <span>{COMMUNITY_SIDEBAR.TRENDING_HOT}</span>
        </div>

        <div className={styles.list}>
          {trendingDestinations.map((destination) => (
            <div key={destination.id} className={styles.destinationItem}>
              <div>
                <strong>{destination.name}</strong>
                <span>{destination.weather}</span>
              </div>

              <Button type="button" variant="engagement">
                {COMMUNITY_SIDEBAR.VIEW_BTN}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}