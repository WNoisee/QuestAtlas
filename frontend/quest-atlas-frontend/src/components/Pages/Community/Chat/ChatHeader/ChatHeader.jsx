import styles from "./ChatHeader.module.css";
import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";

export default function ChatHeader({ chat, onClose }) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Avatar>{chat.avatar}</Avatar>

        <div className={styles.info}>
          <div className={styles.nameRow}>
            <h4>{chat.name}</h4>

            <span
              className={`${styles.status} ${
                chat.status === "online"
                  ? styles.online
                  : styles.offline
              }`}
            >
              {chat.status === "online" ? "Đang hoạt động" : "Ngoại tuyến"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Icon symbol="phone" size="25" color="primary"></Icon>
        <Button variant="closeBtn" onClick={onClose}>
          <Icon symbol="close" size="15" color="primary"></Icon>
        </Button>
      </div>
    </div>
  );
}