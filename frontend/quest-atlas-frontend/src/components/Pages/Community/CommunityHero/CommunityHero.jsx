import styles from "./CommunityHero.module.css";
import Badge from "../../../common/Badge/Badge";
import Text from "../../../common/Text/Text";
import { MapPin, Users, Compass } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label="🌍 Cộng đồng Nhà Thám Hiểm" variant="soft" />

        <Text as="h1" size="xl" weight="bold" line="tight" className={styles.heading}>
          Khám phá thế giới cùng những nhà thám hiểm
        </Text>

        <Text size="md" weight="regular" line="relaxed" color="muted" className={styles.subheading}>
          Chia sẻ những chuyến phiêu lưu tuyệt vời, kết nối với cộng đồng những người yêu khám phá, 
          và cùng nhau tạo nên những kỷ niệm không quên.
        </Text>

        <button className={styles.ctaButton}>
          <span>📝 Chia sẻ chuyến đi của bạn</span>
        </button>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.heroCardTop}>
          <Badge label="📊 Thống kê cộng đồng" variant="soft" />
          <Text size="sm" weight="medium" line="normal" color="muted">
            “Hàng nghìn hành trình đang được chia sẻ mỗi ngày”
          </Text>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight" className={styles.statValue}>
              1.2K+
            </Text>
            <Text size="sm" weight="medium" line="normal" className={styles.statLabel}>
              Bài chia sẻ
            </Text>
          </div>

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight">
              320+
            </Text>
            <Text size="sm" weight="medium" line="normal" className={styles.statLabel}>
              Nhà lữ hành
            </Text>
          </div>

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" line="tight">
              48+
            </Text>
            <Text size="sm" weight="medium" line="normal">
              Điểm đến hot
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}