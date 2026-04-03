import styles from "./AchievementStats.module.css";
import Text from "../../../common/Text/Text";

export default function AchievementStats() {
  const userStats = {
    level: 12,
    currentXP: 3450,
    totalXP: 5000,
    nextLevelXP: 5000,
    totalCoinz: 2840,
    achievements: 18,
  };

  const progressPercent = (userStats.currentXP / userStats.nextLevelXP) * 100;

  return (
    <div className={styles.statsContainer}>
      <div className={styles.profileCard}>
        <div className={styles.levelBadge}>
          <div className={styles.levelNumber}>{userStats.level}</div>
          <span className={styles.levelLabel}>Level</span>
        </div>

        <div className={styles.profileInfo}>
          <Text as="h2" size="lg" weight="bold" leading="tight">
            Nhà du hành của bạn
          </Text>
          <Text size="sm" weight="regular" color="muted" leading="normal">
            Tiếp tục khám phá để mở khóa thêm danh hiệu
          </Text>
        </div>

        <div className={styles.statGrid}>
          <div className={styles.statBox}>
            <Text size="xs" weight="semibold" color="muted" leading="tight">
              Tổng XP
            </Text>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {userStats.totalXP.toLocaleString()}
            </Text>
          </div>

          <div className={styles.statBox}>
            <Text size="xs" weight="semibold" color="muted" leading="tight">
              Coinz
            </Text>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {userStats.totalCoinz}
            </Text>
          </div>

          <div className={styles.statBox}>
            <Text size="xs" weight="semibold" color="muted" leading="tight">
              Danh hiệu
            </Text>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              {userStats.achievements}
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <Text as="h3" size="md" weight="bold" leading="tight">
            Tiến độ đến Level {userStats.level + 1}
          </Text>
          <Text size="sm" weight="semibold" color="accent" leading="tight">
            {userStats.currentXP.toLocaleString()} / {userStats.nextLevelXP.toLocaleString()} XP
          </Text>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
          <span className={styles.progressPercent}>{Math.round(progressPercent)}%</span>
        </div>

        <div className={styles.progressFooter}>
          <Text size="xs" weight="regular" color="muted" leading="tight">
            Cần thêm {(userStats.nextLevelXP - userStats.currentXP).toLocaleString()} XP
          </Text>
        </div>
      </div>
    </div>
  );
}
