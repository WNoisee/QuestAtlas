import ExploreTabs from "../ExploreTabs/ExploreTabs";
import ExploreCard from "../ExploreCard/ExploreCard";
import styles from "./ExploreSidebar.module.css";

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
        <span className={styles.label}>Danh mục khám phá</span>
        <h2 className={styles.title}>Lựa chọn hành trình</h2>
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