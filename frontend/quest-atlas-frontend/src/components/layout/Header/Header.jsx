import Button from "../../common/Button/Button";
import styles from "./Header.module.css";
import { ArrowRightToLine } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NAV_TEXTS } from "../../../constants/texts";

export default function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.brand}>{NAV_TEXTS.BRAND}</div>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {NAV_TEXTS.HOME}
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {NAV_TEXTS.EXPLORE}
          </NavLink>

          <NavLink
            to="/community"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {NAV_TEXTS.COMMUNITY}
          </NavLink>

          <NavLink
            to="/awards"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {NAV_TEXTS.AWARDS}
          </NavLink>
        </nav>

        <Button
          as={NavLink}
          to="/login"
          variant="primary"
          icon={<ArrowRightToLine size={16} />}
          iconPosition="right"
          size="sm"
          className={styles.loginBtn}
        >
          {NAV_TEXTS.LOGIN}
        </Button>
      </div>
    </header>
  );
}