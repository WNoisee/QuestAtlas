import styles from "./AchievementTabs.module.css";
import Button from "../../../../components/common/Button/Button";
import { AWARDS_TABS } from "../../../../constants/texts";

export default function AchievementTabs({ activeTab, onTabChange, stats }) {
  const tabs = [
    { id: "all", label: AWARDS_TABS.ALL, count: stats.total },
    { id: "completed", label: AWARDS_TABS.COMPLETED, count: stats.completed },
    { id: "progress", label: AWARDS_TABS.IN_PROGRESS, count: stats.inProgress },
  ];

  return (
    <div className={styles.tabsList}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            type="button"
            variant="tab"
            size="sm"
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
            {tab.count && <span className={styles.count}>{tab.count}</span>}
          </Button>
        ))}
      </div>
  );
}
