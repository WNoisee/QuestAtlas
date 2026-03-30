import styles from "./Button.module.css";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  active = false,
  fullWidth = false,
  icon = null,
  iconPosition = "right",
  className = "",
  type = "button",
  as: Component = "button", 
  ...props
}) {
  return (
    <Component
      type={Component === "button" ? type : undefined}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.active]: active,
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span >{icon}</span>
      )}

      {children && <span className={styles.label}>{children}</span>}

      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </Component>
  );
}