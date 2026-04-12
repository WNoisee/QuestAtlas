import styles from "./ExploreToolbar.module.css";
import Input from "../../../../components/common/Input/Input";
import Icon from "../../../../components/common/Icon/Icon";
import Button from "../../../../components/common/Button/Button";
import { EXPLORE_TOOLBAR } from "../../../../constants/texts";

function ExploreToolbar({
  searchValue,
  onSearchChange,
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <section className={styles.toolbar}>
      <div className={styles.searchBar}>
        <Icon symbol="search" size="sm" className={styles.searchIcon} />
        <Input
          id="explore-search"
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={EXPLORE_TOOLBAR.SEARCH_PLACEHOLDER}
          containerClassName={styles.inputWrapper}
          className={styles.searchInput}
          fullWidth
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