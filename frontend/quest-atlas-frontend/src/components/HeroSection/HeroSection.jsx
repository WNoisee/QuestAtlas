import Button from "../common/Button/Button";
import styles from "./HeroSection.module.css";
import { Rocket, Map } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <section className={styles.heroCopy}>

      <h1>
        Khám phá hành trình bằng bản đồ trực quan
        <br />
      </h1>

      <p>
        Đây là layout frontend đầu tiên cho dự án của bạn. Mình dựng một
        adventure map theo tone kem, nâu và vàng để sau này bạn nối tiếp
        sang route, weather forecast và AI recommendations.
      </p>

      <div className={styles.ctaRow}>
        <Button variant="primary" icon={<Rocket size={18} />}>
          Get Started
        </Button>
        <Button variant="secondary" icon={<Map size={18}/>}>View Trips</Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <strong>24+</strong>
          <span>Destinations</span>
        </div>
        <div className={styles.statCard}>
          <strong>12</strong>
          <span>Suggested Routes</span>
        </div>
        <div className={styles.statCard}>
          <strong>AI</strong>
          <span>Weather Ready</span>
        </div>
      </div>
      </section>
    </div>
  );
}