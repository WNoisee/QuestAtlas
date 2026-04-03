import styles from "./AwardCard.module.css";
import Text from "../../../common/Text/Text";
import { Lock } from "lucide-react";

export default function AwardCard({ award, onClick }) {
  const isLocked = award.progress === 0;
  const isCompleted = award.progress === 100;
  const isNew = award.isNew;
  const rarity = award.rarity || "common";

  const difficultyColor = {
    "Dễ": "#79ffb2",
    "Trung bình": "#ffd700",
    "Khó": "#ff6b6b",
    "Rất khó": "#d46b6b",
  };

  const rarityColors = {
    common: "#8b7355",
    rare: "#2ba39d",
    epic: "#9b59b6",
    legendary: "#e6a73c",
  };

  const rarityGlows = {
    common: "0 0 20px rgba(139, 115, 85, 0.2)",
    rare: "0 0 25px rgba(43, 163, 157, 0.3), 0 0 40px rgba(43, 163, 157, 0.15)",
    epic: "0 0 25px rgba(155, 89, 182, 0.3), 0 0 40px rgba(155, 89, 182, 0.15)",
    legendary: "0 0 30px rgba(230, 167, 60, 0.4), 0 0 50px rgba(230, 167, 60, 0.2)",
  };

  return (
    <button
      className={`${styles.card} ${styles[`rarity-${rarity}`]} ${isLocked ? styles.locked : ""} ${isCompleted ? styles.completed : ""} ${isNew ? styles.new : ""}`}
      onClick={onClick}
      style={!isLocked ? { boxShadow: rarityGlows[rarity] } : undefined}
    >
      <div className={styles.badgeContainer}>
        {isNew && <span className={styles.newBadge}>Mới</span>}
        {isCompleted && <span className={styles.unlockedBadge}>Hoàn thành</span>}
        <span className={`${styles.rarityBadge} ${styles[`rarity-${rarity}`]}`}>
          {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
        </span>
      </div>

      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <span className={`${styles.icon} ${isLocked ? styles.iconLocked : ""}`}>
            {award.icon}
          </span>
          {isLocked && <Lock className={styles.lockIcon} size={20} />}
          {isCompleted && <span className={styles.checkmark}>✓</span>}
        </div>

        <span
          className={styles.difficulty}
          style={!isLocked ? { borderColor: difficultyColor[award.difficulty] } : {}}
        >
          {award.difficulty}
        </span>
      </div>

      <div className={styles.content}>
        <Text as="h3" size="md" weight="bold" leading="tight" className={styles.name}>
          {award.name}
        </Text>

        <Text size="sm" weight="regular" color="muted" leading="normal" className={styles.description}>
          {award.description}
        </Text>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${award.progress}%` }} />
        </div>
        <Text size="xs" weight="medium" color="muted" className={styles.progressText}>
          {award.progress}%
        </Text>
      </div>

      {award.reward && (
        <div className={styles.rewardsRow}>
          {award.reward.xp && (
            <span className={styles.reward} title="Experience Points">
              ⭐ {award.reward.xp}
            </span>
          )}
          {award.reward.coins && (
            <span className={styles.reward} title="Coins">
              🪙 {award.reward.coins}
            </span>
          )}
          {award.reward.points && (
            <span className={styles.reward} title="Points">
              🏆 {award.reward.points}
            </span>
          )}
        </div>
      )}
    </button>
  );
}
