export const chatConversations = [
  {
    id: 1,
    name: "Minh Anh",
    avatar: "MA",
    status: "online",
    lastMessage: "Đi Hà Giang không?",
    lastTime: "2 phút",
    unread: 2,
    messages: [
      { id: 1, sender: "them", text: "Đi Hà Giang không?", time: "09:10" },
      { id: 2, sender: "me", text: "Ok luôn!", time: "09:12" },
    ],
  },
  {
    id: 2,
    name: "Bảo Trâm",
    avatar: "BT",
    status: "offline",
    lastMessage: "Gửi lịch trình rồi nhé",
    lastTime: "1 giờ",
    unread: 0,
    messages: [
      { id: 1, sender: "them", text: "Gửi lịch trình rồi nhé", time: "08:20" },
    ],
  },
];