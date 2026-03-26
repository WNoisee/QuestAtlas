import styles from "./CommunityTabs.module.css";
import { communityTabs } from "../../../../data/communityData";
import Button from "../../../common/Button/Button";
import { useState } from "react";

export default function CommunityTabs() {
  const [active, setActive] = useState(communityTabs[0]);
  const handleTabClick = (tab) => {
    setActive(tab);
  };
  return (
    <div className={styles.tabs}>
      {communityTabs.map((tab, index) => (
        <Button
          key={index}
          type="button"
          variant="tab"
          active={active === tab ? "active" : ""} 
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}