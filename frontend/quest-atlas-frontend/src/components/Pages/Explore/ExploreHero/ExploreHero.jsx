import styles from "./ExploreHero.module.css";

function ExploreHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Khám phá</h1>
      <p className={styles.description}>
        Tìm hành trình, điểm đến và cung đường phù hợp với phong cách du lịch của bạn.
      </p>
    </section>
  );
}

export default ExploreHero;