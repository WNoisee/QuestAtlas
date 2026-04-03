import clsx from "clsx";
import styles from "./CardButton.module.css";

export default function CardButton({
  children,
  active = false,
  fullWidth = true,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        styles.cardButton,
        {
          [styles.active]: active,
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}