import styles from "./Input.module.css";
import clsx from "clsx";

export default function Input({
  label,
  error,
  helperText,
  id,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  containerClassName = "",
  ...props
}) {
  return (
    <div
      className={clsx(styles.container, { [styles.fullWidth]: fullWidth }, containerClassName)}
    >
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={clsx(
          styles.input,
          styles[variant],
          styles[size],
          {
            [styles.error]: error,
          },
          className
        )}
        {...props}
      />

      {error ? (
        <p className={styles.errorText}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}