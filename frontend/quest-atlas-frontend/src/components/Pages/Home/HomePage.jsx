import HeroSection from "../../HeroSection/HeroSection";
import MapPanel from "../../MapPanel/MapPanel";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <HeroSection />
      <MapPanel />
    </section>
  );
}