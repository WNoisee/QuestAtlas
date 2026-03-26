import styles from "./Button.module.css";

export default function Button({children, variant = "", active = "", icon = null, ...props}) {
  return (
    <div className={styles.center}>
      <button className={`${styles.button} ${styles[variant]} ${styles[active]}`.trim()} {...props}>
        {children}
        {icon && (
          <span className={styles.icon}>
            <span className={styles.iconGlyph}>{icon}</span>
          </span>
        )}
      </button>
    </div>
  );
}