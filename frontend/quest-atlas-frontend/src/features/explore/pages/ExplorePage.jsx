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
import Toggle from "../../../components/common/Toggle/Toggle";

function ExplorePage() {
  const [activeTab, setActiveTab] = useState("destinations");
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(destinations[0] || null);
  const [openSidebar, setOpenSidebar] = useState(true);

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
      const itemName = item.name || "";
      const itemDescription = item.description || "";
      const itemCategory = item.category || "";
      const itemBadge = item.badge || "";

      const matchSearch =
        !search ||
        itemName.toLowerCase().includes(search) ||
        itemDescription.toLowerCase().includes(search) ||
        itemCategory.toLowerCase().includes(search);

      const matchFilter =
        !filter ||
        itemCategory.toLowerCase().includes(filter) ||
        itemBadge.toLowerCase().includes(filter) ||
        itemDescription.toLowerCase().includes(filter);

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
    <div>
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
              <Toggle
                isOpen={openSidebar}
                setIsOpen={setOpenSidebar}
                className={openSidebar ? styles.toggleOpen : styles.toggleClosed}
              />
              {openSidebar && (
                <ExploreSidebar
                  tabs={exploreTabs}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  onSidebarToggle={() => setOpenSidebar(false)}
                  items={filteredItems}
                  selectedItem={selectedItem}
                  onSelectItem={setSelectedItem}
                />
              )}
            </div>
          </div>
        </section>
        <ChatDock />
    </div>
  );
}

export default ExplorePage;