import { useMemo, useState } from "react";
import styles from "./ChatPanel.module.css";
import ChatList from "../ChatList/ChatList";
import Badge from "../../../../../components/layout/Badge/Badge";
import Button from "../../../../../components/common/Button/Button";
import Icon from "../../../../../components/common/Icon/Icon";
import Text from "../../../../../components/common/Text/Text";
import Input from "../../../../../components/common/Input/Input";
import { CHAT_PANEL_TEXTS } from "../../../../../constants/texts";

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
          <Badge label={CHAT_PANEL_TEXTS.HEADER} variant="soft" />

          <Button
            type="button"
            variant="iconBtn"
            aria-label={CHAT_PANEL_TEXTS.SUGGESTION_ARIA}
          >
            <Icon symbol="sparkle" size="xs" />
          </Button>
        </div>

        <div className={styles.headerContent}>
          <Text as="h3" size="lg" weight="bold" color="chatHeaderStrong">
            {CHAT_PANEL_TEXTS.TITLE}
          </Text>

          <Text as="p" size="xs" color="chatHeader" leading="normal">
            {CHAT_PANEL_TEXTS.DESCRIPTION}
          </Text>
        </div>
      </div>

      <div className={styles.searchWrap}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>⌕</span>

          <Input
            id="chat-search"
            type="text"
            placeholder={CHAT_PANEL_TEXTS.SEARCH_PLACEHOLDER}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            containerClassName={styles.inputWrapper}
            className={styles.searchInput}
            fullWidth
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