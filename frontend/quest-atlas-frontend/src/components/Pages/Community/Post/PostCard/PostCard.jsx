import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>{post.avatar}</div>

          <div className={styles.meta}>
            <div className={styles.nameRow}>
              <h3>{post.author}</h3>
              <span className={styles.starBadge}>⭐ {post.stars}</span>
            </div>

            <p>
              {post.rank} · 📍 {post.location} · {post.time}
            </p>
          </div>
        </div>

        <button type="button" className={styles.moreButton}>
          •••
        </button>
      </div>

      <div className={styles.imageWrap}>
        <img src={post.image} alt={post.location} />
      </div>

      <p className={styles.caption}>{post.caption}</p>

      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.stats}>
          <span>🤎 {post.likes}</span>
          <span>💬 {post.comments}</span>
        </div>

        <div className={styles.actions}>
          <button type="button">Yêu thích</button>
          <button type="button">Bình luận</button>
          <button type="button">Lưu</button>
        </div>
      </div>
    </article>
  );
}