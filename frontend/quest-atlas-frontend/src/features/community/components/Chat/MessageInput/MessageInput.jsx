import { useState } from "react";
import styles from "./MessageInput.module.css";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";
import Text from "../../../../../components/common/Text/Text";
import Textarea from "../../../../../components/common/Textarea/Textarea";
import { COMMUNITY_CHAT } from "../../../../../constants/texts";

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
              {COMMUNITY_CHAT.ATTACH_IMAGE}
            </Text>
          </Button>

          <Button variant="engagement" size="xs" type="button">
            <Text size="xs" weight="regular" color="soft">
              {COMMUNITY_CHAT.ATTACH_LOCATION}
            </Text>
          </Button>

          <Button variant="engagement" size="xs" type="button">
            <Text size="xs" weight="regular" color="soft">
              {COMMUNITY_CHAT.ATTACH_SCHEDULE}
            </Text>
          </Button>
        </div>

        <div className={styles.inputRow}>
          <Textarea
            id="message-input"
            className={styles.input}
            rows={1}
            placeholder={COMMUNITY_CHAT.INPUT_PLACEHOLDER}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type a message"
          />

          <Button
            className="sendBtn"
            variant=""
            type="button"
            onClick={handleSend}
            aria-label={COMMUNITY_CHAT.SEND_ARIA}
          >
            <Icon symbol="send" size="md" />
          </Button>
        </div>
      </div>
    </div>
  );
}