import styles from "./Badge.module.css";

export default function Badge({
  label = "",
  value = "",
  arrow = "",
  className = "badgeVersion",
  indicator = "",
}) {
  return (
    <div className={styles[className]}>
      <span className={styles[indicator]} />
      <span>{label}</span>
      {arrow && <span className={styles.arrow}>{arrow}</span>}
      {value && <span className={styles.value}>{value}</span>}
    </div>
  );
}