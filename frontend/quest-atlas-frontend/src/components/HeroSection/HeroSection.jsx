import Button from "../common/Button/Button";
import styles from "./HeroSection.module.css";
import { Rocket, Map, MapPin, Compass, CloudSun } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <section className={styles.heroCopy}>

      <h1>Khám phá hành trình trên bản đồ thông minh</h1>

      <p>
        Lên kế hoạch chuyến đi, khám phá điểm đến và theo dõi thời tiết
        trong một trải nghiệm trực quan, liền mạch.
      </p>

      <div className={styles.ctaRow}>
        <Button variant="primary" icon={<Rocket size={18} />}>
          Khám phá ngay
        </Button>
        <Button variant="secondary" icon={<Map size={18}/>}>Xem hành trình</Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            24+
            <span className={styles.iconWrapper}>
              <MapPin className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Điểm đến</span>
        </div>

        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            12
            <span className={styles.iconWrapper}>
              <Compass className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Lộ trình thông minh</span>
        </div>

        <div className={styles.statCard}>
          <strong className={styles.statValue}>
            AI
            <span className={styles.iconWrapper}>
              <CloudSun className={styles.iconGlow} size={16} />
            </span>
          </strong>
          <span className={styles.statLabel}>Theo dõi thời tiết</span>
        </div>
      </div>
      </section>
    </div>
  );
}