import BrandingPanel from "../components/BrandingPanel/BrandingPanel";
import LoginForm from "../components/LoginForm/LoginForm";
import Badge from "../../../components/layout/Badge/Badge";
import { NAV_TEXTS, AUTH_TEXTS } from "../../../constants/texts";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.frame}>
        <div className={styles.brandingColumn}>
          <BrandingPanel />
        </div>

        <div className={styles.formColumn}>
          <div className={styles.pageContent}>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
