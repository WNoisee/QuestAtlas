import Avatar from "../../../../../components/common/Avatar/Avatar";
import Button from "../../../../../components/common/Button/Button";
import Badge from "../../../../../components/layout/Badge/Badge";
import Icon from "../../../../../components/common/Icon/Icon";
import styles from "./PostCard.module.css";
import { Flame, MapPin, Navigation2, Clock, Award } from "lucide-react";
import { COMMUNITY_POST } from "../../../../../constants/texts";

const journeyTypeEmojis = {
  mountain: "⛰️",
  beach: "🏖️",
  culture: "🏛️",
  food: "🍜",
  roadtrip: "🚗"
};

export default function PostCard({ post }) {
  const tier = post.tier || "common";
  const engagement = post.engagement || 0;
  const maxEngagement = 250;
  const engagementPercent = (engagement / maxEngagement) * 100;

  return (
    <article className={`${styles.card} ${styles[`tier-${tier}`]} ${post.isHot ? styles.hot : ""}`}>
      {/* Header with Explorer Info */}
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar>{post.avatar}</Avatar>

          <div className={styles.meta}>
            <div className={styles.nameRow}>
              <div className={styles.explorerInfo}>
                <h3>{post.author}</h3>
                <span className={styles.explorerLevel}>{COMMUNITY_POST.LEVEL_LABEL} {post.explorerLevel}</span>
              </div>

              <Badge
                variant="starBadge"
                label={
                  <>
                    <Icon symbol="star" size="xs" />
                    {post.stars}
                  </>
                }
              />
            </div>

            <p className={styles.metaInfo}>
              <span className={styles.rank}>{post.rank}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.badge}>{post.badgeLabel}</span>
            </p>
          </div>
        </div>

        <Button type="button" variant="engagement" aria-label={COMMUNITY_POST.OPTIONS_ARIA}>
          •••
        </Button>
      </div>

      {/* Journey Image */}
      <div className={styles.imageWrap}>
        <img src={post.image} alt={post.location} />
        <div className={styles.locationBadge}>
          <MapPin size={16} /> {post.location}
        </div>
      </div>

      {/* Journey Description */}
      <p className={styles.caption}>{post.caption}</p>

      {/* Journey Metadata */}
      <div className={styles.journeyMetadata}>
        <div className={styles.metaItem}>
          <Navigation2 size={16} />
          <span>{post.distance}</span>
        </div>
        <div className={styles.metaItem}>
          <Clock size={16} />
          <span>{post.duration}</span>
        </div>
      </div>

      {/* Tags */}
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            className={styles.hashtag}
            variant="soft"
            label={`#${tag}`}
          />
        ))}
      </div>

      {/* Achievement */}
      {post.achievement && (
        <div className={styles.achievementBanner}>
          <Award size={18} />
          <div>
            <strong>{post.achievement.name}</strong>
            <span>+{post.achievement.xp} XP</span>
          </div>
        </div>
      )}

      {/* Engagement Bar */}
      <div className={styles.engagementBar}>
        <div className={styles.engagementTrack}>
          <div 
            className={`${styles.engagementFill} ${styles[`tier-${tier}`]}`} 
            style={{ width: `${engagementPercent}%` }} 
          >
            <div className={styles.engagementShimmer} />
          </div>
        </div>
        <span className={styles.engagementText}>{engagement} interactions</span>
      </div>

      {/* Engagement Actions */}
      <div className={styles.footer}>
        <div className={styles.stats}>
          <span className={styles.stat}>
            <Icon symbol="heart" size="xs" /> {post.likes}
          </span>

          <span className={styles.stat}>
            <Icon symbol="comment" size="xs" /> {post.comments}
          </span>

          {post.shares && (
            <span className={styles.stat}>
              <Icon symbol="share" size="xs" /> {post.shares}
            </span>
          )}
        </div>

        <div className={styles.actions}>
          <Button type="button" variant="engagement">
            {COMMUNITY_POST.LOVE_BTN}
          </Button>
          <Button type="button" variant="engagement">
            {COMMUNITY_POST.COMMENT_BTN}
          </Button>
          <Button type="button" variant="engagement">
            {COMMUNITY_POST.SAVE_BTN}
          </Button>
        </div>
      </div>
    </article>
  );
}