import styles from "./EmptyState.module.css";
import Text from "../../../../components/common/Text/Text";
import Button from "../../../../components/common/Button/Button";
import { AWARDS_EMPTY } from "../../../../constants/texts";

export default function EmptyState({ message, action }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🎯</div>
      <Text as="h3" size="lg" weight="bold" leading="tight">
        {AWARDS_EMPTY.NO_ACHIEVEMENTS}
      </Text>
      <Text size="md" weight="regular" color="muted" leading="relaxed">
        {message || AWARDS_EMPTY.EXPLORE_CTA}
      </Text>
      {action && (
        <Button variant="primary" className={styles.actionBtn}>
          {action}
        </Button>
      )}
    </div>
  );
}
