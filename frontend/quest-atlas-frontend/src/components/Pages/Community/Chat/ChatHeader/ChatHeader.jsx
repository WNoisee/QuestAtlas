import styles from "./ChatHeader.module.css";

export default function ChatHeader({ chat, onClose }) {
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.avatar}>{chat.avatar}</div>

        <div className={styles.meta}>
          <h4>{chat.name}</h4>
          <span>{chat.status === "online" ? "Đang hoạt động" : "Ngoại tuyến"}</span>
        </div>
      </div>

      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>
    </div>
  );
}