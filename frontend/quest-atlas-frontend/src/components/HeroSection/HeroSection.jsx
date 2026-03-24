import Button from "../common/Button/Button";
import styles from "./HeroSection.module.css";
import { Rocket, Map, MapPin, Compass, CloudSun } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <section className={styles.heroCopy}>

      <h1>Khám phá hành trình bằng bản đồ trực quan</h1>

      <p>
        Lên kế hoạch hành trình, khám phá điểm đến và theo dõi thời tiết
        trực tiếp trên một bản đồ trực quan, thông minh.
      </p>

      <div className={styles.ctaRow}>
        <Button variant="primary" icon={<Rocket size={18} />}>
          Get Started
        </Button>
        <Button variant="secondary" icon={<Map size={18}/>}>View Trips</Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            24+
            <span className={styles.iconWrapper}>
              <MapPin className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Explore Destinations</span>
        </div>

        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            12
            <span className={styles.iconWrapper}>
              <Compass className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Plan Smart Routes</span>
        </div>

        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            AI
            <span className={styles.iconWrapper}>
              <CloudSun className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Track Weather</span>
        </div>
      </div>
      </section>
    </div>
  );
}