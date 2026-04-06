import Avatar from "../../../../../components/common/Avatar/Avatar";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";
import Input from "../../../../../components/common/Input/Input";
import styles from "./PostComposer.module.css";
import { COMMUNITY_COMPOSER } from "../../../../../constants/texts";

export default function PostComposer() {
  return (
    <section className={styles.composer}>
      <div className={styles.header}>
        <Avatar>QA</Avatar>

        <Input
          id="post-composer"
          placeholder={COMMUNITY_COMPOSER.PLACEHOLDER}
          containerClassName={styles.inputWrapper}
        />
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="tool">
          <Icon symbol="camera" size="sm" /> {COMMUNITY_COMPOSER.ADD_IMAGE}
        </Button>

        <Button type="button" variant="tool">
          <Icon symbol="location" size="sm" /> {COMMUNITY_COMPOSER.TAG_LOCATION}
        </Button>

        <Button type="button" variant="tool">
          <Icon symbol="starIcon" size="sm" /> engagement cột mốc
        </Button>
      </div>
    </section>
  );
}