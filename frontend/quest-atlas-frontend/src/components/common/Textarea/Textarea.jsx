import styles from "./Textarea.module.css";
import clsx from "clsx";

export default function Textarea({
  label,
  error,
  helperText,
  id,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  containerClassName = "",
  rows = 3,
  ...props
}) {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.fullWidth]: fullWidth },
        containerClassName
      )}
    >
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={clsx(
          styles.textarea,
          styles[variant],
          styles[size],
          {
            [styles.error]: error,
          },
          className
        )}
        rows={rows}
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