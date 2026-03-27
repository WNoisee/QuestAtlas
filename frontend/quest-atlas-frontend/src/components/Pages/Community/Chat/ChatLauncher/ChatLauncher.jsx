import styles from "./ChatLauncher.module.css";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";

export default function ChatLauncher({ onClick }) {
  return (
    <Button variant="launcher" onClick={onClick}>
      <Icon symbol="message" size="25" color="primary"></Icon>
    </Button>
  );
}