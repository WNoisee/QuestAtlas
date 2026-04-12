import Button from "../../../../components/common/Button/Button";
import Icon from "../../../../components/common/Icon/Icon";
import styles from "./SocialLogin.module.css";
import { AUTH_TEXTS } from "../../../../constants/texts";

export default function SocialLogin() {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      fullWidth
      className={styles.socialButton}
      icon={<Icon symbol="globe" size="sm" />}
      iconPosition="left"
    >
      {AUTH_TEXTS.SOCIAL_LOGIN_GOOGLE}
    </Button>
  );
}
