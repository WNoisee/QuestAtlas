import Avatar from "../../../../../components/common/Avatar/Avatar";
import Button from "../../../../../components/common/Button/Button";
import Badge from "../../../../../components/layout/Badge/Badge";
import Icon from "../../../../../components/common/Icon/Icon";
import Text from "../../../../../components/common/Text/Text";
import styles from "./PostCard.module.css";
import { Flame } from "lucide-react";
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
                <Text as="h3" size="md" weight="bold">{post.author}</Text>
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

            <Text as="p" size="xs" color="muted" className={styles.metaInfo}>
              <span className={styles.rank}>{post.rank}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.badge}>{post.badgeLabel}</span>
            </Text>
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
          <Icon symbol="location" size="xs" /> {post.location}
        </div>
      </div>

      {/* Journey Description */}
      <Text as="p" size="sm" className={styles.caption}>{post.caption}</Text>

      {/* Journey Metadata */}
      <div className={styles.journeyMetadata}>
        <div className={styles.metaItem}>
          <Icon symbol="navigation" size="sm" />
          <Text as="span" size="sm">{post.distance}</Text>
        </div>
        <div className={styles.metaItem}>
          <Icon symbol="clock" size="sm" />
          <Text as="span" size="sm">{post.duration}</Text>
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
          <Icon symbol="award" size="sm" />
          <div>
            <Text as="strong" size="sm" weight="bold">{post.achievement.name}</Text>
            <Text as="span" size="sm" weight="medium">+{post.achievement.xp} XP</Text>
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