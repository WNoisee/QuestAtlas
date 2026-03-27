import { useMemo, useState } from "react";
import styles from "./ChatPanel.module.css";
import ChatList from "../ChatList/ChatList";
import Badge from "../../../../common/Badge/Badge";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";

export default function ChatPanel({ conversations, onSelectChat }) {
  const [search, setSearch] = useState("");

  const filteredConversations = useMemo(() => {
    return conversations.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [conversations, search]);

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div className={styles.headerTop}>
          <Badge label="Hộp tin nhắn thoại" className="previewBadge"></Badge>
          <Button type="button">
            <Icon symbol="sparkle" size="12" color="primary"></Icon>
          </Button>
        </div>

        <div className={styles.headerContent}>
          <h3>Tin nhắn</h3>
          <p>Kết nối với bạn đồng hành và tiếp tục những hành trình đang dang dở.</p>
        </div>
      </div>

      <div className={styles.searchWrap}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            type="text"
            placeholder="Tìm bạn đồng hành..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.listWrap}>
        <ChatList
          conversations={filteredConversations}
          onSelectChat={onSelectChat}
        />
      </div>
    </div>
  );
}