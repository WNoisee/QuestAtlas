import styles from "./CommunityHero.module.css";
import Badge from "../../../common/Badge/Badge";
import Text from "../../../common/Text/Text";

export default function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label="Cộng đồng lữ hành" variant="soft" />

        <Text as="h1" size="xl" weight="bold" line="tight">
          Hàng nghìn hành trình cùng những người yêu khám phá
        </Text>

        <Text size="md" weight="regular" line="relaxed" color="muted">
          Đăng ảnh, kể lại khoảnh khắc đáng nhớ và kết nối với cộng đồng đam mê
          du lịch qua những điểm đến bạn đã đi qua.
        </Text>
      </div>

      <div className={styles.heroCard}>
        <div>
          <Badge label="Tổng quan cộng đồng" variant="soft" />

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