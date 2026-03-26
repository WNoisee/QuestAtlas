import styles from "./Avatar.module.css";

export default function Avatar({ children, className }) {
  return (
    <div className={styles.avatar}>
      {children}
    </div>
  );
}