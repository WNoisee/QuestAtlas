import styles from "./AwardsPage.module.css";
import AwardsHero from "./AwardsHero/AwardsHero";
import AchievementStats from "./AchievementStats/AchievementStats";
import AwardsGrid from "./AwardsGrid/AwardsGrid";

export default function AwardsPage() {
  return (
    <main className={styles.awardsPage}>
      <AwardsHero />
      <AchievementStats />
      <AwardsGrid />
    </main>
  );
}