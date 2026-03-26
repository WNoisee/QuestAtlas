import styles from "./ChatLauncher.module.css";

export default function ChatLauncher({ onClick }) {
  return (
    <button className={styles.launcher} onClick={onClick}>
      💬
    </button>
  );
}