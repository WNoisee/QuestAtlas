import { useMemo, useRef, useState } from "react";
import { DraggableWrapper } from "../../../components/common/Drag/Draggable";
import ExploreToolbar from "../components/ExploreToolbar/ExploreToolbar";
import ExploreSidebar from "../components/ExploreSidebar/ExploreSidebar";
import ExploreMapPanel from "../components/ExploreMapPanel/ExploreMapPanel";
import {
  aiSuggestions,
  destinations,
  exploreTabs,
  filterChips,
  routes,
} from "../data/ExploreData";
import styles from "./ExplorePage.module.css";
import ChatDock from "../../community/components/Chat/ChatDock/ChatDock";

function ExplorePage() {
  const [activeTab, setActiveTab] = useState("destinations");
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(destinations[0] || null);

  const toolbarInitialPosition = useMemo(() => ({ x: 500, y: 300 }), []);

  const toolbarHandleRef = useRef(null);
  const overlayCanvasRef = useRef(null);

  const currentItems = useMemo(() => {
    if (activeTab === "routes") return routes;
    if (activeTab === "ai") return aiSuggestions;
    return destinations;
  }, [activeTab]);

  const filteredItems = useMemo(() => {
    const search = searchValue.trim().toLowerCase();
    const filter = activeFilter.trim().toLowerCase();

    return currentItems.filter((item) => {
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      const matchFilter =
        !filter ||
        item.category.toLowerCase().includes(filter) ||
        item.badge?.toLowerCase().includes(filter) ||
        item.description.toLowerCase().includes(filter);

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
      <div className={styles.mapLayer}>
        <ExploreMapPanel
          items={destinations}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />
      </div>

      <div className={styles.overlay} ref={overlayCanvasRef}>
        <DraggableWrapper
          initialPosition={toolbarInitialPosition}
          bounds={{ left: 0, top: 0, right: 900, bottom: 850 }}
          handleRef={toolbarHandleRef}
          width={550}
        >
          <div className={styles.toolbarDragShell}>

            <ExploreToolbar
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              filters={filterChips}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              ref={toolbarHandleRef}
            />
          </div>
        </DraggableWrapper>

        <div className={styles.leftOverlay}>
          <ExploreSidebar
            tabs={exploreTabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            items={filteredItems}
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
          />
        </div>
      </div>
      <ChatDock></ChatDock>
    </section>
  );
}

export default ExplorePage;