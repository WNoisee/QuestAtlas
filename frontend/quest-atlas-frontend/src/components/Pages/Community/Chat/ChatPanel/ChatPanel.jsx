import { useMemo, useState } from "react";
import styles from "./ChatPanel.module.css";
import ChatList from "../ChatList/ChatList";
import Badge from "../../../../common/Badge/Badge";
import Button from "../../../../common/Button/Button";
import Icon from "../../../../common/Icon/Icon";
import Text from "../../../../common/Text/Text";

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
          <Badge label="Hộp tin nhắn thoại" variant="soft" />

          <Button
            type="button"
            variant="iconBtn"
            aria-label="Gợi ý thông minh"
          >
            <Icon symbol="sparkle" size="xs" />
          </Button>
        </div>

        <div className={styles.headerContent}>
          <Text as="h3" size="lg" weight="bold" color="chatHeaderStrong">
            Tin nhắn
          </Text>

          <Text as="p" size="xs" color="chatHeader" leading="normal">
            Kết nối với bạn đồng hành và tiếp tục những hành trình đang dang dở.
          </Text>
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