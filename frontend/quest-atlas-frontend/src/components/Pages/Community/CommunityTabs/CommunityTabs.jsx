import styles from "./CommunityTabs.module.css";
import { communityTabs } from "../../../../data/communityData";

export default function CommunityTabs() {
  return (
    <div className={styles.tabs}>
      {communityTabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`${styles.tab} ${index === 0 ? styles.active : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}