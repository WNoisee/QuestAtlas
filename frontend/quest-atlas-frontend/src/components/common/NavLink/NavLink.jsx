import styles from "./NavLink.module.css";

export default function NavLink({ children, active = false, href = "#" }) {
  return (
    <a
      href={href}
      className={`${styles.navLink} ${active ? styles.active : ""}`.trim()}
    >
      {children}
    </a>
  );
}