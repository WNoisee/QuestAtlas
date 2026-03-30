import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import Badge from "../../../../common/Badge/Badge";
import Icon from "../../../../common/Icon/Icon";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar>{post.avatar}</Avatar>

          <div className={styles.meta}>
            <div className={styles.nameRow}>
              <h3>{post.author}</h3>

              <Badge
                variant="starBadge"
                label={
                  <>
                    <Icon symbol="star" size="xs" />
                    {post.stars}
                  </>
                }
              />
            </div>

            <p>
              {post.rank} <Icon symbol="location" size="xs" /> {post.location} ·{" "}
              {post.time}
            </p>
          </div>
        </div>

        <Button type="button" variant="engagement" aria-label="Tùy chọn bài viết">
          •••
        </Button>
      </div>

      <div className={styles.imageWrap}>
        <img src={post.image} alt={post.location} />
      </div>

      <p className={styles.caption}>{post.caption}</p>

      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            className={styles.hashtag}
            variant="soft"
            label={`#${tag}`}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.stats}>
          <span>
            <Icon symbol="heart" size="xs" /> {post.likes}
          </span>

          <span>
            <Icon symbol="comment" size="xs" /> {post.comments}
          </span>
        </div>

        <div className={styles.actions}>
          <Button type="button" variant="engagement">
            Yêu thích
          </Button>
          <Button type="button" variant="engagement">
            Bình luận
          </Button>
          <Button type="button" variant="engagement">
            Lưu
          </Button>
        </div>
      </div>
    </article>
  );
}