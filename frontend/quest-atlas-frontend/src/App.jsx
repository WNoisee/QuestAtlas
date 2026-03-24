import "./assets/styles/tokens.css";
import "./assets/styles/globals.css";
import "./assets/styles/layout.css";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MapPanel from "./components/MapPanel/MapPanel";
import Badge from "./components/common/Badge/Badge";
import { destinations } from "./data/destination";

import styles from "./App.module.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="app-container">
        <div className="quest-app">
          <div className="quest-grid" />

          <Header />
          <Badge />

          <main className={styles.hero}>
            <HeroSection />
            <MapPanel destinations={destinations} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;