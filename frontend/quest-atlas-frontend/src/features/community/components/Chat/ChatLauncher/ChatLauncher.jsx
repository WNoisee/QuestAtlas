import styles from "./ChatLauncher.module.css";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";

export default function ChatLauncher({ onClick }) {
  return (
    <Button
      className={styles.launcher}
      variant=""
      type="button"
      onClick={onClick}
      aria-label="Mở chat"
    >
      <Icon symbol="message" size="lg" />
    </Button>
  );
}