import { useState } from "react";
import styles from "./MessageInput.module.css";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";
import Text from "../../../../common/Text/Text";

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
          <Button variant="engagement" size="xs" type="button">
            <Text size="xs" weight="regular" color="soft">
              Ảnh
            </Text>
          </Button>

          <Button variant="engagement" size="xs" type="button">
            <Text size="xs" weight="regular" color="soft">
              Địa điểm
            </Text>
          </Button>

          <Button variant="engagement" size="xs" type="button">
            <Text size="xs" weight="regular" color="soft">
              Lịch trình
            </Text>
          </Button>
        </div>

        <div className={styles.inputRow}>
          <textarea
            className={styles.input}
            rows="1"
            placeholder="Nhập tin nhắn..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Button
            variant="sendBtn"
            type="button"
            onClick={handleSend}
            aria-label="Gửi"
          >
            <Icon symbol="send" size="md" />
          </Button>
        </div>
      </div>
    </div>
  );
}