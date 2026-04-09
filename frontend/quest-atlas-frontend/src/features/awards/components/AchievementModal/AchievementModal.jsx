import styles from "./AchievementModal.module.css";
import Text from "../../../../components/common/Text/Text";
import Button from "../../../../components/common/Button/Button";
import { X } from "lucide-react";
import { AWARDS_MODAL } from "../../../../constants/texts";

export default function AchievementModal({ achievement, isOpen, onClose }) {
  if (!isOpen) return null;

  const difficultyColor = {
    "Dễ": "#79ffb2",
    "Trung bình": "#ffd700",
    "Khó": "#ff6b6b",
    "Rất khó": "#d46b6b",
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button variant="outline" type="button" className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </Button>

        <div className={styles.header}>
          <div className={styles.iconLarge}>{achievement.icon}</div>
          <div className={styles.titleSection}>
            <div className={styles.badges}>
              <span
                className={styles.difficulty}
                style={{ borderColor: difficultyColor[achievement.difficulty] }}
              >
                {achievement.difficulty}
              </span>
              {achievement.isNew && <span className={styles.newBadge}>{AWARDS_MODAL.NEW_BADGE}</span>}
              {achievement.progress === 100 && (
                <span className={styles.completedBadge}>{AWARDS_MODAL.COMPLETED}</span>
              )}
            </div>
            <Text as="h2" size="2xl" weight="bold" leading="tight">
              {achievement.name}
            </Text>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <Text as="h3" size="md" weight="bold" leading="tight">
              {AWARDS_MODAL.DESCRIPTION}
            </Text>
            <Text size="md" weight="regular" color="muted" leading="relaxed">
              {achievement.description}
            </Text>
          </div>

          <div className={styles.section}>
            <Text as="h3" size="md" weight="bold" leading="tight">
              {AWARDS_MODAL.PROGRESS}
            </Text>
            <div className={styles.progressInfo}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
              <Text size="sm" weight="semibold" color="accent" leading="tight">
                {achievement.progress}%
              </Text>
            </div>
            <Text size="sm" weight="regular" color="muted" leading="tight">
              {AWARDS_MODAL.COMPLETED} {Math.round(achievement.current || 0)} / {achievement.target || 10}
            </Text>
          </div>

          <div className={styles.rewardsGrid}>
            {achievement.reward?.xp && (
              <div className={styles.rewardBox}>
                <span className={styles.rewardIcon}>⭐</span>
                <Text as="strong" size="md" weight="bold" leading="tight">
                  {achievement.reward.xp}
                </Text>
                <Text size="xs" weight="regular" color="muted" leading="tight">
                  {AWARDS_MODAL.XP_REWARD}
                </Text>
              </div>
            )}
            {achievement.reward?.coins && (
              <div className={styles.rewardBox}>
                <span className={styles.rewardIcon}>🪙</span>
                <Text as="strong" size="md" weight="bold" leading="tight">
                  {achievement.reward.coins}
                </Text>
                <Text size="xs" weight="regular" color="muted" leading="tight">
                  {AWARDS_MODAL.COINZ_REWARD}
                </Text>
              </div>
            )}
            {achievement.reward?.points && (
              <div className={styles.rewardBox}>
                <span className={styles.rewardIcon}>🏆</span>
                <Text as="strong" size="md" weight="bold" leading="tight">
                  {achievement.reward.points}
                </Text>
                <Text size="xs" weight="regular" color="muted" leading="tight">
                  {AWARDS_MODAL.POINTS_REWARD}
                </Text>
              </div>
            )}
          </div>

          {achievement.unlockedDate && (
            <div className={styles.unlockedInfo}>
              <span className={styles.checkmark}>✓</span>
              <Text size="sm" weight="regular" color="success" leading="tight">
                {AWARDS_MODAL.UNLOCKED_DATE} {achievement.unlockedDate}
              </Text>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <Button variant="primary" type="button" className={styles.btn} onClick={onClose}>
            {AWARDS_MODAL.CLOSE_BTN}
          </Button>
          {achievement.progress === 100 && (
            <Button variant="primary" type="button" className={styles.btnShare}>{AWARDS_MODAL.SHARE_BTN}</Button>
          )}
        </div>
      </div>
    </div>
  );
}
