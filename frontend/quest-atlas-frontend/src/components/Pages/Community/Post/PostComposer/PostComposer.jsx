import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";
import Input from "../../../../common/Input/Input";
import styles from "./PostComposer.module.css";

export default function PostComposer() {
  return (
    <section className={styles.composer}>
      <div className={styles.header}>
        <Avatar>QA</Avatar>

        <Input
          id="post-composer"
          placeholder="Bạn vừa khám phá điều gì trên hành trình của mình?"
          containerClassName={styles.inputWrapper}
        />
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="tool">
          <Icon symbol="camera" size="sm" /> Thêm ảnh
        </Button>

        <Button type="button" variant="tool">
          <Icon symbol="location" size="sm" /> Gắn địa điểm
        </Button>

        <Button type="button" variant="tool">
          <Icon symbol="starIcon" size="sm" /> engagement cột mốc
        </Button>
      </div>
    </section>
  );
}