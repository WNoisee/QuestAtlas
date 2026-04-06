import HeroSection from "../components/HeroSection/HeroSection";
import MapPanel from "../components/MapPanel/MapPanel";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <HeroSection />
      <MapPanel />
    </section>
  );
}