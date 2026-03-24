import styles from "./Badge.module.css";

export default function Badge({label = "Atlas Version", value = "v1", className = ""}) {
  return (
    <badge className={`${styles.badge} ${className}`.trim()}>
      <span className={styles.indicator} />
      <span>{label}</span>
      <span className={styles.arrow}>›</span>
      <span className={styles.value}>{value}</span>
    </badge>
  );
}