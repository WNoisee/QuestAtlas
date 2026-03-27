import { useMemo, useState } from "react";
import ExploreHero from "../ExploreHero/ExploreHero";
import ExploreToolbar from "../ExploreToolbar/ExploreToolbar";
import ExploreSidebar from "../ExploreSidebar/ExploreSidebar";
import ExploreMapPanel from "../ExploreMapPanel/ExploreMapPanel";
import {
  aiSuggestions,
  destinations,
  exploreTabs,
  filterChips,
  routes,
} from "../../../../data/ExploreData";
import styles from "./ExplorePage.module.css";

function ExplorePage() {
  const [activeTab, setActiveTab] = useState("destinations");
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(destinations[0]);

  const currentItems = useMemo(() => {
    if (activeTab === "routes") return routes;
    if (activeTab === "ai") return aiSuggestions;
    return destinations;
  }, [activeTab]);

  const filteredItems = useMemo(() => {
    return currentItems.filter((item) => {
      const matchSearch =
        !searchValue ||
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase());

      const matchFilter =
        !activeFilter ||
        item.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        item.badge?.toLowerCase().includes(activeFilter.toLowerCase()) ||
        item.description.toLowerCase().includes(activeFilter.toLowerCase());

      return matchSearch && matchFilter;
    });
  }, [currentItems, searchValue, activeFilter]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);

    if (tabId === "routes") {
      setSelectedItem(routes[0] || null);
      return;
    }

    if (tabId === "ai") {
      setSelectedItem(aiSuggestions[0] || null);
      return;
    }

    setSelectedItem(destinations[0] || null);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter((prev) => (prev === filter ? "" : filter));
  };

  return (
    <section className={styles.page}>
      <ExploreHero />

      <ExploreToolbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        filters={filterChips}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <div className={styles.content}>
        <ExploreSidebar
          tabs={exploreTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          items={filteredItems}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />

        <ExploreMapPanel
          items={destinations}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />
      </div>
    </section>
  );
}

export default ExplorePage;