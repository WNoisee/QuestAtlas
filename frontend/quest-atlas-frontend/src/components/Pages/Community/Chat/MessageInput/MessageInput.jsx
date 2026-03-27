import { useState } from "react";
import styles from "./MessageInput.module.css";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";

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
          <Button variant="toolBtn" type="button">Ảnh</Button>
          <Button variant="toolBtn" type="button">Địa điểm</Button>
          <Button variant="toolBtn" type="button">Lịch trình</Button>
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

          <Button variant="sendBtn" onClick={handleSend} type="button">
            <Icon symbol="send" size="18" color="primary"></Icon>
          </Button>
        </div>
      </div>
    </div>
  );
}