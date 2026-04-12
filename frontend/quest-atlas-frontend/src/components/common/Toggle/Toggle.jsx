import styles from "./Toggle.module.css";
import Button from "../Button/Button";
import { TOGGLE_TEXTS } from "../../../constants/texts";

function Toggle({ isOpen, setIsOpen, className = "" }) {
  return (
    <Button
      type="button"
      variant="transparent"
      className={`${styles.toggle} ${className}`}
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label={isOpen ? TOGGLE_TEXTS.CLOSE_ARIA : TOGGLE_TEXTS.OPEN_ARIA}
      aria-pressed={isOpen}
    >
      <span className={`${styles.chevron} ${isOpen ? styles.left : styles.right}`} />
    </Button>
  );
}

export default Toggle;