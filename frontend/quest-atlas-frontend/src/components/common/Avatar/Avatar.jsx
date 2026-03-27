import styles from "./Avatar.module.css";

export default function Avatar({ children, className = "avatar" }) {
  return (
    <div className={styles[className]}>
      {children}
    </div>
  );
}