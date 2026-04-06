import { useState } from "react";
import styles from "./ChatDock.module.css";
import { chatConversations } from "../../../data/chatConversations";

import ChatLauncher from "../ChatLauncher/ChatLauncher";
import ChatPanel from "../ChatPanel/ChatPanel";
import ChatPopup from "../ChatPopup/ChatPopup";

export default function ChatDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [conversations, setConversations] = useState(chatConversations);

  const handleSelectChat = (chat) => {
    setActiveChat(chat);
    setIsOpen(true);
  };

  const handleSendMessage = (text) => {
    if (!activeChat) return;

    const newMsg = {
      id: Date.now(),
      sender: "me",
      text,
      time: "Vừa xong",
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeChat.id
          ? {
              ...c,
              lastMessage: text,
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );
  };

  return (
    <div className={styles.chatDock}>
      {isOpen && (
        <ChatPanel
          conversations={conversations}
          onSelectChat={handleSelectChat}
        />
      )}

      {activeChat && (
        <ChatPopup
          chat={activeChat}
          onClose={() => setActiveChat(null)}
          onSendMessage={handleSendMessage}
        />
      )}

      <ChatLauncher onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}