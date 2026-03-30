import clsx from "clsx";
import styles from "./Text.module.css";

export default function Text({
  as: Component = "span",
  size = "md",
  weight = "regular",
  color = "main",
  leading = "normal",
  tracking = "normal",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        styles.text,
        styles[size],
        styles[weight],
        styles[color],
        styles[leading],
        styles[tracking],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}