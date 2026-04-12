import Avatar from "../../../../../components/common/Avatar/Avatar";
import Text from "../../../../../components/common/Text/Text";
import styles from "./ChatItem.module.css";
import { CHAT_ITEM_TEXTS } from "../../../../../constants/texts";

export default function ChatItem({ chat, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <Avatar>{chat.avatar}</Avatar>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <Text className={styles.name}>
            {chat.name || CHAT_ITEM_TEXTS.DEFAULT_USER}
          </Text>

          <Text className={styles.time} color="chatItemTime">
            {chat.lastTime || ""}
          </Text>
        </div>

        <Text className={styles.message} color="chatItemMessage">
          {chat.lastMessage || CHAT_ITEM_TEXTS.NO_MESSAGE}
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