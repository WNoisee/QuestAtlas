import styles from "./AchievementModal.module.css";
import Text from "../../../common/Text/Text";
import { X } from "lucide-react";

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
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

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
              {achievement.isNew && <span className={styles.newBadge}>Mới</span>}
              {achievement.progress === 100 && (
                <span className={styles.completedBadge}>Hoàn thành</span>
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
              Mô tả
            </Text>
            <Text size="md" weight="regular" color="muted" leading="relaxed">
              {achievement.description}
            </Text>
          </div>

          <div className={styles.section}>
            <Text as="h3" size="md" weight="bold" leading="tight">
              Tiến độ
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
              Hoàn thành {Math.round(achievement.current || 0)} / {achievement.target || 10}
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
                  XP
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
                  Coinz
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
                  Điểm
                </Text>
              </div>
            )}
          </div>

          {achievement.unlockedDate && (
            <div className={styles.unlockedInfo}>
              <span className={styles.checkmark}>✓</span>
              <Text size="sm" weight="regular" color="success" leading="tight">
                Đã mở khóa vào {achievement.unlockedDate}
              </Text>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.btn} onClick={onClose}>
            Đóng
          </button>
          {achievement.progress === 100 && (
            <button className={styles.btnShare}>Chia sẻ thành tích</button>
          )}
        </div>
      </div>
    </div>
  );
}
