import { useMemo, useState } from "react";
import styles from "./ChatPanel.module.css";
import ChatList from "../ChatList/ChatList";

export default function ChatPanel({ conversations, onSelectChat }) {
  const [search, setSearch] = useState("");

  const filteredConversations = useMemo(() => {
    return conversations.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [conversations, search]);

  return (
    <div className={styles.panel}>
      <h3>Tin nhắn</h3>

      <input
        className={styles.search}
        type="text"
        placeholder="Tìm bạn đồng hành..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ChatList
        conversations={filteredConversations}
        onSelectChat={onSelectChat}
      />
    </div>
  );
}