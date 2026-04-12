import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/common/Input/Input";
import Icon from "../../../../components/common/Icon/Icon";
import SocialLogin from "../SocialLogin/SocialLogin";
import Button from "../../../../components/common/Button/Button";
import Text from "../../../../components/common/Text/Text";
import { AUTH_TEXTS } from "../../../../constants/texts";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.email.trim() || !values.password.trim()) {
      setError(AUTH_TEXTS.VALIDATION_ERROR);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setValues((current) => ({ ...current, password: "" }));
      navigate("/");
    } catch {
      setError(AUTH_TEXTS.LOGIN_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.loginPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.headerLabel}>{AUTH_TEXTS.LOGIN_TITLE}</div>
        <Text as="h2" size="lg" weight="bold">{AUTH_TEXTS.LOGIN_HEADER}</Text>
        <Text as="p" size="md" color="muted">{AUTH_TEXTS.LOGIN_HELPER}</Text>
      </div>

      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Input
          id="email-input"
          label={AUTH_TEXTS.EMAIL_LABEL}
          name="email"
          type="email"
          value={values.email}
          placeholder={AUTH_TEXTS.EMAIL_PLACEHOLDER}
          onChange={handleChange}
          startIcon={<Icon symbol="mail" size="sm" />}
          fullWidth
          autoComplete="email"
          aria-required="true"
        />

        <Input
          id="password-input"
          label={AUTH_TEXTS.PASSWORD_LABEL}
          name="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          placeholder={AUTH_TEXTS.PASSWORD_PLACEHOLDER}
          onChange={handleChange}
          startIcon={<Icon symbol="lock" size="sm" />}
          endIcon={showPassword ? <Icon symbol="eyeOff" size="sm" /> : <Icon symbol="eye" size="sm" />}
          onEndIconClick={() => setShowPassword((current) => !current)}
          fullWidth
          autoComplete="current-password"
          aria-required="true"
        />

        <div className={styles.rowOptions}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="remember"
              checked={values.remember}
              onChange={handleChange}
            />
            {AUTH_TEXTS.REMEMBER_ME}
          </label>
          <a href="/" className={styles.forgotLink}>
            {AUTH_TEXTS.FORGOT_PASSWORD}
          </a>
        </div>

        {error && <div className={styles.formError}>{error}</div>}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          className={styles.submitButton}
          icon={<Icon symbol="arrowRight" size="sm" />}
          iconPosition="right"
        >
          {isSubmitting ? AUTH_TEXTS.LOGIN_LOADING : AUTH_TEXTS.LOGIN_BUTTON}
        </Button>

        <div className={styles.divider}>
          <Text as="span" size="sm" weight="medium">{AUTH_TEXTS.OR_LABEL}</Text>
        </div>

        <SocialLogin />

        <div className={styles.footerText}>
          <Text as="span" size="sm">{AUTH_TEXTS.SIGNUP_PROMPT}</Text>
          <a href="/" className={styles.signUpLink}>
            {AUTH_TEXTS.SIGNUP_ACTION}
          </a>
        </div>
      </form>
    </section>
  );
}
