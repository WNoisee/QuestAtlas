import Button from "../Button/Button";
import styles from "./Header.module.css";
import { ArrowRightToLine } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.brand}>QuestAtlas</div>

        <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Trang chủ
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Khám phá
        </NavLink>

        <NavLink
          to="/community"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Cộng đồng
        </NavLink>

        <NavLink
          to="/awards"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Danh hiệu
        </NavLink>
      </nav>

        <Button
          variant="outline"
          icon={<ArrowRightToLine size={18} />}
        >
          Đăng nhập
        </Button>
      </div>
    </header>
  );
}