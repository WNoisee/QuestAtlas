import styles from "./MessageBubble.module.css";
import Text from "../../../../../components/common/Text/Text";

export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`${styles.row} ${isMe ? styles.me : styles.them}`}>
      <div
        className={`${styles.bubble} ${
          isMe ? styles.myBubble : styles.theirBubble
        }`}
      >
        <Text as="p" size="sm" color="message">
          {message.text}
        </Text>

        <Text
          as="span"
          size="xm"
          color="muted"
          className={styles.time}
        >
          {message.time}
        </Text>
      </div>
    </div>
  );
}