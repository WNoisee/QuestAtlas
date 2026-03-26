import Avatar from "../../../../common/Avatar/Avatar";
import Button from "../../../../common/Button/Button";
import styles from "./PostComposer.module.css";
import Icon from "../../../../common/Icon/Icon";

export default function PostComposer() {
  return (
    <section className={styles.composer}>
      <div className={styles.header}>
        <Avatar className="avatar">QA</Avatar>

        <div className={styles.inputMock}>
          Bạn vừa khám phá điều gì trên hành trình của mình?
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="action"><Icon symbol="camera" size="13" color="primary"></Icon> Thêm ảnh</Button>
        <Button type="button" variant="action"><Icon symbol="location" size="13" color="primary"></Icon> Gắn địa điểm</Button>
        <Button type="button" variant="action"><Icon symbol="starIcon" size="13" color="primary"></Icon> Chia sẻ cột mốc</Button>
      </div>
    </section>
  );
}