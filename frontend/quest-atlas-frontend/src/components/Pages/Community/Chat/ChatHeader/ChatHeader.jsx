import styles from "./ChatHeader.module.css";
import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";
import Text from "../../../../common/Text/Text";

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
                ? "Đang hoạt động"
                : "Ngoại tuyến"}
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          variant=""
          type="button"
          aria-label="Gọi điện"
        >
          <Icon symbol="phone" size="md" />
        </Button>

        <Button
          variant=""
          type="button"
          onClick={onClose}
          aria-label="Đóng chat"
        >
          <Icon symbol="close" size="md" />
        </Button>
      </div>
    </div>
  );
}