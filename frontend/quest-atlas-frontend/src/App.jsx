import "./assets/styles/tokens.css";
import "./assets/styles/globals.css";
import "./assets/styles/layout.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/common/Header/Header";
import Badge from "./components/common/Badge/Badge";

import HomePage from "./components/Pages/Home/HomePage";
import CommunityPage from "./components/Pages/Community/CommunityPage/CommunityPage";
import ExplorePage from "./components/Pages/Explore/ExplorePage";
import AwardsPage from "./components/Pages/Awards/AwardsPage";

import styles from "./App.module.css";

function App() {
  const location = useLocation();

  const getBadgeLabel = () => {
    if (location.pathname === "/community") return "Cộng Đồng Atlas";
    if (location.pathname === "/explore") return "Khám Phá Atlas";
    if (location.pathname === "/awards") return "Danh Hiệu Atlas";
    return "Phiên Bản Atlas";
  };

  return (
    <div className="page-wrapper">
      <div className="app-container">
        <div className="quest-app">
          <div className="quest-grid" />

          <Header />
          <Badge label={getBadgeLabel()} value="v1" arrow="›" indicator="indicator"/>

          <main className={styles.pageContent}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/awards" element={<AwardsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;