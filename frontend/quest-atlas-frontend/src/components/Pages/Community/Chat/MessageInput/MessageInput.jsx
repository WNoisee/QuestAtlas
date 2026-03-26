import { useState } from "react";
import styles from "./MessageInput.module.css";

export default function MessageInput({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSendMessage(trimmed);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.composer}>
        <div className={styles.tools}>
          <button className={styles.toolBtn} type="button">Ảnh</button>
          <button className={styles.toolBtn} type="button">Địa điểm</button>
          <button className={styles.toolBtn} type="button">Lịch trình</button>
        </div>

        <div className={styles.inputRow}>
          <textarea
            className={styles.input}
            rows="1"
            placeholder="Nhắn gì đó về chuyến đi tiếp theo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button className={styles.sendBtn} onClick={handleSend} type="button">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}