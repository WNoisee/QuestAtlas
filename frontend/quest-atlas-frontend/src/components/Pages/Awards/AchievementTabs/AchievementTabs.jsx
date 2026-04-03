import styles from "./AchievementTabs.module.css";
import Text from "../../../common/Text/Text";

export default function AchievementTabs({ activeTab, onTabChange, stats }) {
  const tabs = [
    { id: "all", label: "Tất cả", count: stats.total },
    { id: "completed", label: "Hoàn thành", count: stats.completed },
    { id: "progress", label: "Đang tiến hành", count: stats.inProgress },
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
