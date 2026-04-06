import Avatar from "../../../../../components/common/Avatar/Avatar";
import Text from "../../../../../components/common/Text/Text";
import styles from "./ChatItem.module.css";

export default function ChatItem({ chat, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <Avatar>{chat.avatar}</Avatar>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <Text className={styles.name}>
            {chat.name || "Người dùng"}
          </Text>

          <Text className={styles.time} color="chatItemTime">
            {chat.lastTime || ""}
          </Text>
        </div>

        <Text className={styles.message} color="chatItemMessage">
          {chat.lastMessage || "Chưa có tin nhắn"}
        </Text>
      </div>

      {chat.unread > 0 && (
        <Text className={styles.unread}>
          {chat.unread}
        </Text>
      )}
    </div>
  );
}