import styles from "./EmptyState.module.css";
import Text from "../../../common/Text/Text";

export default function EmptyState({ message, action }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🎯</div>
      <Text as="h3" size="lg" weight="bold" leading="tight">
        Chưa có danh hiệu
      </Text>
      <Text size="md" weight="regular" color="muted" leading="relaxed">
        {message || "Bắt đầu khám phá và hoàn thành nhiệm vụ để kiếm được danh hiệu đáng tự hào."}
      </Text>
      {action && (
        <button className={styles.actionBtn}>
          {action}
        </button>
      )}
    </div>
  );
}
