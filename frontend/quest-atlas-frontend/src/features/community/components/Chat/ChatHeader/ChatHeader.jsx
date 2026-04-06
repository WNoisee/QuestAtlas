import styles from "./ChatHeader.module.css";
import Avatar from "../../../../../components/common/Avatar/Avatar";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";
import Text from "../../../../../components/common/Text/Text";
import { COMMUNITY_CHAT } from "../../../../../constants/texts";

export default function ChatHeader({ chat, onClose }) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Avatar>{chat.avatar}</Avatar>

        <div className={styles.info}>
          <div className={styles.nameRow}>
            <Text as="h4" size="md" weight="semibold">
              {chat.name}
            </Text>

            <Text
              as="span"
              size="xs"
              className={`${styles.status} ${
                chat.status === "online"
                  ? styles.online
                  : styles.offline
              }`}
            >
              {chat.status === "online"
                ? COMMUNITY_CHAT.HEADER_ACTIVE
                : COMMUNITY_CHAT.HEADER_OFFLINE}
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          variant=""
          type="button"
          aria-label={COMMUNITY_CHAT.CALL_ARIA}
        >
          <Icon symbol="phone" size="md" />
        </Button>

        <Button
          variant=""
          type="button"
          onClick={onClose}
          aria-label={COMMUNITY_CHAT.CLOSE_ARIA}
        >
          <Icon symbol="close" size="md" />
        </Button>
      </div>
    </div>
  );
}