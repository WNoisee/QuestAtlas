import styles from "./MessageList.module.css";
import MessageBubble from "../MessageBubble/MessageBubble";

export default function MessageList({ messages }) {
  return (
    <div className={styles.messageList}>
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </div>
  );
}