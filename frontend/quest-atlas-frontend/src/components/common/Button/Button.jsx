import styles from "./Button.module.css";

export default function Button({children, variant = "primary", className = "", icon = null, ...props}) {
  const variantClass = styles[variant] || styles.primary;

  return (
    <div className={styles.center}>
      <button className={`${styles.button} ${variantClass} ${className}`.trim()} {...props}>
        <span>{children}</span>
        {icon && (
          <span className={styles.icon}>
            <span className={styles.iconGlyph}>{icon}</span>
          </span>
        )}
      </button>
    </div>
  );
}