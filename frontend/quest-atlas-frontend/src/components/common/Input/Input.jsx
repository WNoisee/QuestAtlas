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
  startIcon,
  endIcon,
  onEndIconClick,
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

      <div
        className={clsx(
          styles.inputWrapper,
          styles[variant],
          styles[size],
          {
            [styles.error]: error,
          }
        )}
      >
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}

        <input
          id={id}
          className={clsx(styles.input, className)}
          {...props}
        />

        {endIcon && (
          onEndIconClick ? (
            <button type="button" className={styles.endIconButton} onClick={onEndIconClick}>
              {endIcon}
            </button>
          ) : (
            <span className={styles.endIcon}>{endIcon}</span>
          )
        )}
      </div>

      {error ? (
        <p className={styles.errorText}>{error}</p>
      ) : helperText ? (
        <p className={styles.helperText}>{helperText}</p>
      ) : null}
    </div>
  );
}