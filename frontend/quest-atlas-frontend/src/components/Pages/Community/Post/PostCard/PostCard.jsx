import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import styles from "./PostCard.module.css";
import Bagde from "../../../../common/Badge/Badge";
import Icon from "../../../../common/Icon/Icon";

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar className="avatar">{post.avatar}</Avatar>

          <div className={styles.meta}>
            <div className={styles.nameRow}>
              <h3>{post.author}</h3>
              <Bagde className={styles.starBadge}><Icon symbol="star" size="13" color="primary"></Icon> {post.stars}</Bagde>
            </div>

            <p>
              {post.rank}<Icon symbol="location" size="13" color="primary"></Icon> {post.location} · {post.time}
            </p>
          </div>
        </div>

        <Button type="button" variant="action">•••</Button>
      </div>

      <div className={styles.imageWrap}>
        <img src={post.image} alt={post.location} />
      </div>

      <p className={styles.caption}>{post.caption}</p>

      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <Bagde key={tag} label={`#${tag}`} className="hashtags">
            #{tag}
          </Bagde>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.stats}>
          <span><Icon symbol="heart" size="13" color="primary"></Icon> {post.likes}</span>
          <span><Icon symbol="comment" size="13" color="primary"></Icon> {post.comments}</span>
        </div>

        <div className={styles.actions}>
          <Button type="button" variant="action">Yêu thích</Button>
          <Button type="button" variant="action">Bình luận</Button>
          <Button type="button" variant="action">Lưu</Button>
        </div>
      </div>
    </article>
  );
}