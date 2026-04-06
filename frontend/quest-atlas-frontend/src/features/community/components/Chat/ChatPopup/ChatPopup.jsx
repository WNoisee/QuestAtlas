import styles from "./ChatPopup.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

export default function ChatPopup({ chat, onClose, onSendMessage }) {
  return (
    <div className={styles.popup}>
      <ChatHeader chat={chat} onClose={onClose} />
      <MessageList messages={chat.messages} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}