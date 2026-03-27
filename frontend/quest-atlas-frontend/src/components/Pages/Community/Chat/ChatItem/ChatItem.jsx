import Avatar from "../../../../common/Avatar/Avatar";
import styles from "./ChatItem.module.css";

export default function ChatItem({ chat, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <Avatar>{chat.avatar}</Avatar>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <p className={styles.name}>{chat.name}</p>
          <span className={styles.time}>{chat.lastTime}</span>
        </div>

        <p className={styles.message}>{chat.lastMessage}</p>
      </div>

      {chat.unread > 0 && <span className={styles.unread}>{chat.unread}</span>}
    </div>
  );
}