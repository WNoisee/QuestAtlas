import "./assets/styles/tokens.css";
import "./assets/styles/globals.css";
import "./assets/styles/layout.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { PAGE_TITLES } from "./constants/texts";

import Header from "./components/layout/Header/Header";
import Badge from "./components/layout/Badge/Badge";

import HomePage from "./features/home/pages/HomePage";
import CommunityPage from "./features/community/pages/CommunityPage";
import ExplorePage from "./features/explore/pages/ExplorePage";
import AwardsPage from "./features/awards/pages";

import styles from "./App.module.css";

function App() {
  const location = useLocation();
  const isExplorePage = location.pathname === "/explore";

  const getBadgeLabel = () => {
    if (location.pathname === "/community") return PAGE_TITLES.COMMUNITY;
    if (location.pathname === "/explore") return PAGE_TITLES.EXPLORE;
    if (location.pathname === "/awards") return PAGE_TITLES.AWARDS;
    return PAGE_TITLES.HOME;
  };

  return (
    <div className="page-wrapper">
      <div className="app-container">
        <div className={`${styles.questApp} ${isExplorePage ? styles.exploreShell : ""}`}>
          <div className="quest-grid" />

          <div className={isExplorePage ? styles.exploreHeaderLayer : styles.OthersHeaderLayer}>
            <Header />
            <Badge
              label={getBadgeLabel()}
              value="v1"
              arrow
              indicator="diamond"
              variant="default"
              tone="highlight"
              glow
            />
          </div>

          <main className={`${styles.pageContent} ${isExplorePage ? styles.explorePageContent : ""}`}>
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