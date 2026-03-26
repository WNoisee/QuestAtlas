import styles from "./ChatList.module.css";
import ChatItem from "../ChatItem/ChatItem";

export default function ChatList({ conversations, onSelectChat }) {
  return (
    <div className={styles.list}>
      {conversations.map((c) => (
        <ChatItem
          key={c.id}
          chat={c}
          onClick={() => onSelectChat(c)}
        />
      ))}
    </div>
  );
}