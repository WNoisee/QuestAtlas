import styles from "./AwardsHero.module.css";
import Badge from "../../../common/Badge/Badge";
import Text from "../../../common/Text/Text";

export default function AwardsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label="Danh hiệu & Thành tích" variant="soft" />

        <Text as="h1" size="2xl" weight="bold" leading="tight">
          Nhận diện những nhà thám hiểm huyền thoại
        </Text>

        <Text size="md" weight="regular" leading="relaxed" color="muted">
          Kiếm được những danh hiệu độc quyền bằng cách hoàn thành yêu cầu,
          khám phá địa điểm mới và chia sẻ trải nghiệm của bạn với cộng đồng.
        </Text>
      </div>

      <div className={styles.statsCard}>
        <div className={styles.statsContent}>
          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              42
            </Text>
            <Text size="sm" weight="medium" color="muted">
              Danh hiệu khả dụng
            </Text>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              1.5K+
            </Text>
            <Text size="sm" weight="medium" color="muted">
              Nhà thám hiểm
            </Text>
          </div>

          <div className={styles.divider} />

          <div className={styles.statItem}>
            <Text as="strong" size="lg" weight="bold" leading="tight">
              98+
            </Text>
            <Text size="sm" weight="medium" color="muted">
              Địa điểm khám phá
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
