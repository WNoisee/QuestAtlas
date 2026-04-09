import styles from "./AwardsPage.module.css";
import AwardsHero from "../components/AwardsHero/AwardsHero";
import AchievementStats from "../components/AchievementStats/AchievementStats";
import AwardsGrid from "../components/AwardsGrid/AwardsGrid";

export default function AwardsPage() {
  return (
    <main className={`${styles.awardsPage} page-accent-awards`}>
      <AwardsHero />
      <AchievementStats />
      <AwardsGrid />
    </main>
  );
}