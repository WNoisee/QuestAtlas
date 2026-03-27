import styles from "./ExploreToolbar.module.css";

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
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
          placeholder="Tìm địa điểm, hành trình, khu vực..."
        />
      </div>

      <div className={styles.filtersRow}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`${styles.filterChip} ${
              activeFilter === filter ? styles.filterChipActive : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ExploreToolbar;