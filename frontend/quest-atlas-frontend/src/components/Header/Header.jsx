import Button from "../common/Button/Button";
import NavLink from "../common/NavLink/NavLink";
import styles from "./Header.module.css";
import { ArrowRightToLine  } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          QuestAtlas
        </div>

        <nav className={styles.nav}>
          <NavLink active>Trang chủ</NavLink>
          <NavLink>Khám phá</NavLink>
          <NavLink>Cộng đồng</NavLink>
          <NavLink>Danh hiệu</NavLink>
        </nav>

        <Button variant="outline" icon={<ArrowRightToLine size={18} />}>Đăng nhập</Button>
      </div>
    </header>
  );
}