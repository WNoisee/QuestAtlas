import styles from "./Toggle.module.css";
import Button from "../Button/Button";

function Toggle({ isOpen, setIsOpen, className = "" }) {
  return (
    <Button
      type="button"
      variant="transparent"
      className={`${styles.toggle} ${className}`}
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label={isOpen ? "close sidebar" : "open sidebar"}
      aria-pressed={isOpen}
    >
      <span className={`${styles.chevron} ${isOpen ? styles.left : styles.right}`} />
    </Button>
  );
}

export default Toggle;