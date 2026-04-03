import styles from "./ExploreToolbar.module.css";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

function ExploreToolbar({
  searchValue,
  onSearchChange,
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <section className={styles.toolbar}>
      <div className={styles.searchWrap}>
        <Input
          id="explore-search"
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm địa điểm, hành trình, khu vực..."
          containerClassName={styles.inputWrapper}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filtersRow}>
        {filters.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant="chip"
            size="sm"
            active={activeFilter === filter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default ExploreToolbar;