import ExploreTabs from "../ExploreTabs/ExploreTabs";
import ExploreCard from "../ExploreCard/ExploreCard";
import styles from "./ExploreSidebar.module.css";
import Badge from "../../../../components/layout/Badge/Badge";
import Text from "../../../../components/common/Text/Text";
import { EXPLORE_SIDEBAR } from "../../../../constants/texts";

function ExploreSidebar({
  tabs,
  activeTab,
  onTabChange,
  items,
  selectedItem,
  onSelectItem,
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Badge className={styles.badge} label={EXPLORE_SIDEBAR.CATEGORIES_TITLE} variant="soft"/>
        <Text as="h1" size="lg" weight="bold" leading="tight" className={styles.title}>
          {EXPLORE_SIDEBAR.SUGGESTIONS_TITLE}
        </Text>
      </div>

      <ExploreTabs tabs={tabs} activeTab={activeTab} onChange={onTabChange} />

      <div className={styles.list}>
        {items.map((item) => (
          <ExploreCard
            key={item.id}
            item={item}
            active={selectedItem?.id === item.id}
            onClick={onSelectItem}
          />
        ))}
      </div>
    </aside>
  );
}

export default ExploreSidebar;