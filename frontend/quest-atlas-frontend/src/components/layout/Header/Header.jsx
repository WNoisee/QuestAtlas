import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Icon from "../../common/Icon/Icon";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { NAV_TEXTS, HEADER_TEXTS } from "../../../constants/texts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { label: NAV_TEXTS.HOME, path: "/", icon: "globe" },
    { label: NAV_TEXTS.EXPLORE, path: "/explore", icon: "compass" },
    { label: NAV_TEXTS.COMMUNITY, path: "/community", icon: "message" },
    { label: NAV_TEXTS.AWARDS, path: "/awards", icon: "trophy" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Icon symbol="map" size="lg" className={styles.logo} />
          <span className={styles.brand}>{NAV_TEXTS.BRAND}</span>
        </div>

        {/* Center Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon symbol={item.icon} size="md" className={styles.navIcon} />
              <span className={styles.navLabel}>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Section: Search + User Menu + Login */}
        <div className={styles.rightSection}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <Icon symbol="search" size="sm" className={styles.searchIcon} />
            <Input
              id="header-search"
              type="text"
              variant=""
              placeholder={HEADER_TEXTS.SEARCH_PLACEHOLDER}
              className={styles.searchInput}
              aria-label={HEADER_TEXTS.SEARCH_ARIA}
            />
          </div>

          {/* User Menu / Auth */}
          <div className={styles.userSection}>
            <Button variant="engagement" type="button" className={styles.userMenuButton} onClick={toggleUserMenu}>
              <div className={styles.avatar}>Q</div>
            </Button>

            {isUserMenuOpen && (
              <div className={styles.userDropdown}>
                <Button variant="tool" type="button" className={styles.dropdownItem}>
                  <Icon symbol="settings" size="sm" />
                  <span>{HEADER_TEXTS.SETTINGS}</span>
                </Button>
                <Button variant="tool" type="button" className={styles.dropdownItem}>
                  <Icon symbol="logout" size="sm" />
                  <span>{HEADER_TEXTS.LOGOUT}</span>
                </Button>
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
        <Button variant="engagement" type="button" className={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isMenuOpen ? <Icon symbol="close" size="lg" /> : <Icon symbol="menu" size="lg" />}
        </Button>
      </div>
    </header>
  );
}