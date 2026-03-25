import styles from "./PostComposer.module.css";

export default function PostComposer() {
  return (
    <section className={styles.composer}>
      <div className={styles.header}>
        <div className={styles.avatar}>QA</div>

        <div className={styles.inputMock}>
          Bạn vừa khám phá điều gì trên hành trình của mình?
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button">📷 Thêm ảnh</button>
        <button type="button">📍 Gắn địa điểm</button>
        <button type="button">⭐ Chia sẻ cột mốc</button>
      </div>
    </section>
  );
}