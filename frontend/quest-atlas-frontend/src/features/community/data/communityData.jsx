import { COMMUNITY_TABS } from "../../../constants/texts";

export const communityTabs = [
  COMMUNITY_TABS.RECENT,
  COMMUNITY_TABS.FOLLOWING,
  COMMUNITY_TABS.TRENDING,
];

export const journeyCategories = [
  { id: "all", label: "Tất cả", icon: "🌍" },
  { id: "mountain", label: "Núi", icon: "⛰️" },
  { id: "beach", label: "Biển", icon: "🏖️" },
  { id: "culture", label: "Văn hóa", icon: "🏛️" },
  { id: "food", label: "Ẩm thực", icon: "🍜" },
  { id: "roadtrip", label: "Roadtrip", icon: "🚗" }
];

export const communityPosts = [
  {
    id: 1,
    author: "Minh Anh",
    avatar: "MA",
    stars: 18,
    rank: "Nhà lữ hành",
    explorerLevel: 12,
    badge: "rare",
    badgeLabel: "Nhà Khám Phá",
    tier: "rare",
    location: "Hà Giang",
    journeyType: "mountain",
    journeyTypeLabel: "Núi",
    time: "2 giờ trước",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Một buổi sáng đầy sương ở Hà Giang. Cảm giác đi giữa núi non và mây trôi thật sự rất khó quên. Đã chinh phục 15km qua những con đơi cua kỳ vĩ.",
    likes: 124,
    comments: 18,
    shares: 8,
    tags: ["Săn mây", "Phượt núi", "Check-in"],
    engagement: 150,
    distance: "15.2 km",
    duration: "3 ngày",
    achievement: { xp: 50, name: "Mountain Explorer" },
  },
  {
    id: 2,
    author: "Thanh Phong",
    avatar: "TP",
    stars: 27,
    rank: "Nhà lữ hành nổi bật",
    explorerLevel: 18,
    badge: "legendary",
    badgeLabel: "Huyền Thoại",
    tier: "legendary",
    location: "Đà Nẵng",
    journeyType: "beach",
    journeyTypeLabel: "Biển",
    time: "5 giờ trước",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Biển Đà Nẵng hôm nay trong xanh và dịu nhẹ. Mình rất thích cảm giác đi dọc bờ biển vào lúc chiều muộn. Lưu lại những khoảnh khắc tuyệt vời với nhóm bạn backpacker.",
    likes: 203,
    comments: 31,
    shares: 12,
    tags: ["Biển", "Hoàng hôn", "Thư giãn"],
    engagement: 246,
    distance: "25.5 km",
    duration: "5 ngày",
    achievement: { xp: 100, name: "Beach Master" },
    isHot: true,
  },
  {
    id: 3,
    author: "Bảo Trâm",
    avatar: "BT",
    stars: 11,
    rank: "Người khám phá",
    explorerLevel: 8,
    badge: "common",
    badgeLabel: "Nhà Khám Phá",
    tier: "common",
    location: "Đà Lạt",
    journeyType: "culture",
    journeyTypeLabel: "Văn hóa",
    time: "1 ngày trước",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Đà Lạt luôn khiến mình muốn quay lại. Không khí lạnh, rừng thông và những quán cà phê nhỏ rất có sức hút. Tìm hiểu thêm về đời sống người Tây Nguyên.",
    likes: 96,
    comments: 12,
    shares: 5,
    tags: ["Đà Lạt", "Rừng thông", "Cà phê"],
    engagement: 113,
    distance: "12.0 km",
    duration: "2 ngày",
    achievement: { xp: 30, name: "Culture Seeker" },
  },
];

export const topTravelers = [
  { id: 1, name: "Thanh Phong", stars: 27, badge: "Nổi bật" },
  { id: 2, name: "Minh Anh", stars: 18, badge: "Năng động" },
  { id: 3, name: "Bảo Trâm", stars: 11, badge: "Đang lên" },
];

export const trendingDestinations = [
  { id: 1, name: "Hà Giang", weather: "18°C · Có mây" },
  { id: 2, name: "Đà Lạt", weather: "20°C · Se lạnh" },
  { id: 3, name: "Đà Nẵng", weather: "29°C · Nắng đẹp" },
];