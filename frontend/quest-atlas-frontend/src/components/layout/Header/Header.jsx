import { useState } from "react";
import Button from "../../common/Button/Button";
import styles from "./Header.module.css";
import {
  Map,
  Menu,
  X,
  LogOut,
  Settings,
  Compass,
  Users,
  Award,
  Search,
  Globe,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { NAV_TEXTS } from "../../../constants/texts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { label: NAV_TEXTS.HOME, path: "/", icon: Globe },
    { label: NAV_TEXTS.EXPLORE, path: "/explore", icon: Compass },
    { label: NAV_TEXTS.COMMUNITY, path: "/community", icon: Users },
    { label: NAV_TEXTS.AWARDS, path: "/awards", icon: Award },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Map className={styles.logo} size={24} />
          <span className={styles.brand}>{NAV_TEXTS.BRAND}</span>
        </div>

        {/* Center Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <IconComponent size={18} className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Section: Search + User Menu + Login */}
        <div className={styles.rightSection}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className={styles.searchInput}
            />
          </div>

          {/* User Menu / Auth */}
          <div className={styles.userSection}>
            <button className={styles.userMenuButton} onClick={toggleUserMenu}>
              <div className={styles.avatar}>Q</div>
            </button>

            {isUserMenuOpen && (
              <div className={styles.userDropdown}>
                <button className={styles.dropdownItem}>
                  <Settings size={16} />
                  <span>Cài đặt</span>
                </button>
                <button className={styles.dropdownItem}>
                  <LogOut size={16} />
                  <span>Đăng xuất</span>
                </button>
              </div>
            )}
          </div>

          {/* Login Button - Alternative if not logged in */}
          <Button
            as={NavLink}
            to="/login"
            variant="primary"
            size="sm"
            className={styles.loginBtn}
          >
            {NAV_TEXTS.LOGIN}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}