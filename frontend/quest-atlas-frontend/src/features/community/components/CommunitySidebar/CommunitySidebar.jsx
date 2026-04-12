import styles from "./CommunitySidebar.module.css";
import {
  topTravelers,
  trendingDestinations,
} from "../../data/communityData";
import Button from "../../../../components/common/Button/Button";
import Icon from "../../../../components/common/Icon/Icon";
import Badge from "../../../../components/layout/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import { COMMUNITY_SIDEBAR } from "../../../../constants/texts";

export default function CommunitySidebar() {
  return (
    <div className={styles.sidebar}>
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <Text as="h3" size="md" weight="bold">{COMMUNITY_SIDEBAR.TOP_TRAVELERS_TITLE}</Text>
          <Text as="span" size="xs" color="muted">{COMMUNITY_SIDEBAR.TOP_TRAVELERS_PERIOD}</Text>
        </div>

        <div className={styles.list}>
          {topTravelers.map((traveler, index) => (
            <div key={traveler.id} className={styles.listItem}>
              <div className={styles.rank}>{index + 1}</div>

              <div className={styles.itemContent}>
                <Text as="strong" size="sm" weight="bold">{traveler.name}</Text>

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
          <Text as="h3" size="md" weight="bold">{COMMUNITY_SIDEBAR.TRENDING_DESTINATIONS}</Text>
          <Text as="span" size="xs" color="muted">{COMMUNITY_SIDEBAR.TRENDING_HOT}</Text>
        </div>

        <div className={styles.list}>
          {trendingDestinations.map((destination) => (
            <div key={destination.id} className={styles.destinationItem}>
              <div>
                <Text as="strong" size="sm" weight="bold">{destination.name}</Text>
                <Text as="span" size="xs" color="muted">{destination.weather}</Text>
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