import styles from "./AchievementTabs.module.css";
import Text from "../../../../components/common/Text/Text";
import { AWARDS_TABS } from "../../../../constants/texts";

export default function AchievementTabs({ activeTab, onTabChange, stats }) {
  const tabs = [
    { id: "all", label: AWARDS_TABS.ALL, count: stats.total },
    { id: "completed", label: AWARDS_TABS.COMPLETED, count: stats.completed },
    { id: "progress", label: AWARDS_TABS.IN_PROGRESS, count: stats.inProgress },
  ];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <Text size="md" weight="semibold" leading="tight">
              {tab.label}
            </Text>
            <span className={styles.count}>{tab.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
