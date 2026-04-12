import styles from "./ChatLauncher.module.css";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";
import { CHAT_LAUNCHER_TEXTS } from "../../../../../constants/texts";

export default function ChatLauncher({ onClick }) {
  return (
    <Button
      className={styles.launcher}
      variant=""
      type="button"
      onClick={onClick}
      aria-label={CHAT_LAUNCHER_TEXTS.OPEN_ARIA}
    >
      <Icon symbol="message" size="lg" />
    </Button>
  );
}