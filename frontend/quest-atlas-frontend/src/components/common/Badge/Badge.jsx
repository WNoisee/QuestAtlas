import styles from "./Badge.module.css";
import clsx from "clsx";

export default function Badge({
  label,
  value,
  arrow = false,
  indicator = null, // "dot" | "diamond" | null
  variant = "default", // "default" | "soft"
  tone = "highlight", // "highlight" | "warning" | "success" | "error"
  glow = false,
  className = "",
}) {
  return (
    <div
      className={clsx(
        styles.badge,
        styles[variant],
        styles[tone],
        className
      )}
    >
      {indicator && (
        <span
          className={clsx(
            styles.indicator,
            styles[indicator],
            glow && styles.glow
          )}
        />
      )}

      {label && <span className={styles.label}>{label}</span>}
      {arrow && <span className={styles.arrow}>→</span>}
      {value && <span className={styles.value}>{value}</span>}
    </div>
  );
}