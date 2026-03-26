import styles from "./MessageBubble.module.css";

export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`${styles.row} ${isMe ? styles.me : styles.them}`}>
      <div
        className={`${styles.bubble} ${
          isMe ? styles.myBubble : styles.theirBubble
        }`}
      >
        <p className={styles.text}>{message.text}</p>
        <span className={styles.time}>{message.time}</span>
      </div>
    </div>
  );
}