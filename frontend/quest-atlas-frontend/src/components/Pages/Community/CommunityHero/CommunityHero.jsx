import styles from "./CommunityHero.module.css";
import Badge from "../../../common/Badge/Badge";

export default function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Cộng đồng lữ hành</span>

        <h1>Chia sẻ hành trình cùng những người yêu khám phá</h1>

        <p>
          Đăng ảnh, kể lại khoảnh khắc đáng nhớ và kết nối với cộng đồng đam mê
          du lịch qua những điểm đến bạn đã đi qua.
        </p>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.heroCardTop}>
          <Badge label="Nhật ký hành trình nổi bật" className="previewBadge"/>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <strong>1.2K+</strong>
            <span>Bài chia sẻ</span>
          </div>
          <div className={styles.statItem}>
            <strong>320+</strong>
            <span>Nhà lữ hành</span>
          </div>
          <div className={styles.statItem}>
            <strong>48</strong>
            <span>Điểm đến hot</span>
          </div>
        </div>
      </div>
    </section>
  );
}