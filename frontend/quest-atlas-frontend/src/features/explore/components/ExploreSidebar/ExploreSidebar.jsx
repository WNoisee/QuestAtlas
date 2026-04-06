import ExploreTabs from "../ExploreTabs/ExploreTabs";
import ExploreCard from "../ExploreCard/ExploreCard";
import styles from "./ExploreSidebar.module.css";
import Badge from "../../../../components/common/Badge/Badge";
import Text from "../../../../components/common/Text/Text";

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
        <Badge label="Danh mục khám phá" variant="soft"/>
        <Text as="h3" size="lg" weight="bold" leading="tight">
          Gợi hành trình cho bạn
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