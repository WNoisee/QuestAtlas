import styles from "./ExploreTabs.module.css";
import Button from "../../../../components/common/Button/Button"; 

export default function ExploreTabs({ tabs = [], activeTab, onChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="tab"    
          size="sm"        
          active={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}