/**
 * Centralized Text Constants
 * All UI text strings are defined here for easier maintenance and i18n support
 * 
 * Organization:
 * - NAV_TEXTS: Navigation & global
 * - FEATURE_TEXTS: Feature-specific (HOME, EXPLORE, COMMUNITY, AWARDS)
 * - COMMON_TEXTS: Reusable UI text
 * - LABELS: Section labels & headings
 * - BUTTONS: Button text
 * - PLACEHOLDERS: Input placeholders
 * - MESSAGES: Status & info messages
 */

export const NAV_TEXTS = {
  HOME: "Trang chủ",
  EXPLORE: "Khám phá",
  COMMUNITY: "Cộng đồng",
  AWARDS: "Danh hiệu",
  LOGIN: "Đăng nhập",
  BRAND: "QuestAtlas",
};

export const PAGE_TITLES = {
  COMMUNITY: "Cộng Đồng Atlas",
  EXPLORE: "Khám Phá Atlas",
  AWARDS: "Danh Hiệu Atlas",
  HOME: "Phiên Bản Atlas",
};

// ============================================
// HOME FEATURE
// ============================================

export const HOME_HERO = {
  TITLE: "Khám phá hành trình trên bản đồ thông minh",
  DESCRIPTION: "Lên kế hoạch chuyến đi, khám phá điểm đến và theo dõi thời tiết trong một trải nghiệm trực quan, liền mạch.",
  CTA_PRIMARY: "Khám phá ngay",
  CTA_SECONDARY: "Xem hành trình",
};

export const HOME_FEATURES = {
  DESTINATIONS: "Điểm đến",
  SMART_ROUTE: "Lộ trình thông minh",
  WEATHER_TRACKING: "Theo dõi thời tiết",
};

export const HOME_MAP = {
  TITLE: "Bản đồ khám phá",
  DESCRIPTION: "Hành trình của bạn được thể hiện trực quan trên bản đồ",
  PREVIEW_BTN: "Xem trước",
};

// ============================================
// EXPLORE FEATURE
// ============================================

export const EXPLORE_TABS = {
  DESTINATIONS: "Điểm đến",
  JOURNEYS: "Hành trình",
  AI_SUGGESTIONS: "AI gợi ý",
};

export const EXPLORE_SIDEBAR = {
  CATEGORIES_TITLE: "Danh mục khám phá",
  SUGGESTIONS_TITLE: "Gợi hành trình cho bạn",
};

export const EXPLORE_CATEGORIES = {
  ALL: "Tất cả",
  MOUNTAIN: "Núi",
  BEACH: "Biển",
  CULTURE: "Văn hóa",
  FOOD: "Ẩm thực",
  ROADTRIP: "Roadtrip",
};

export const EXPLORE_FILTERS = {
  WEEKEND: "Cuối tuần",
  EASY: "Dễ đi",
  CLOUD_CHASE: "Săn mây",
  RELAX: "Thư giãn",
};

export const EXPLORE_TOOLBAR = {
  SEARCH_PLACEHOLDER: "Tìm địa điểm, hành trình, khu vực...",
  WEATHER_LABEL: "Thời tiết:",
};

// ============================================
// COMMUNITY FEATURE
// ============================================

export const COMMUNITY_TABS = {
  RECENT: "Mới nhất",
  FOLLOWING: "Đang theo dõi",
  TRENDING: "Nổi bật",
};

export const COMMUNITY_HERO = {
  BADGE: "🌍 Cộng đồng Nhà Thám Hiểm",
  STATS_LABEL: "📊 Thống kê cộng đồng",
  TITLE: "Khám phá thế giới cùng những nhà thám hiểm",
  DESCRIPTION: "Chia sẻ những chuyến phiêu lưu tuyệt vời, kết nối với cộng đồng những người yêu khám phá, và cùng nhau tạo nên những kỷ niệm không quên.",
  CTA_SHARE: "📝 Chia sẻ chuyến đi của bạn",
  DAILY_UPDATE: "Hàng nghìn hành trình đang được chia sẻ mỗi ngày",
  CTA_BUTTON: "Khám phá ngay", 
  STATS_BADGE: "📈Thống kê tuần này",
  STATS_QUOTE: "Cùng nhau khám phá và chia sẻ những trải nghiệm tuyệt vời!",
};

export const COMMUNITY_STATS = {
  POSTS_LABEL: "Bài chia sẻ",
  TRAVELERS_LABEL: "Nhà lữ hành",
  HOT_DESTINATIONS: "Điểm đến hot",
};

export const COMMUNITY_SIDEBAR = {
  TOP_TRAVELERS_TITLE: "Nhà lữ hành nổi bật",
  TOP_TRAVELERS_PERIOD: "Tuần này",
  TRENDING_DESTINATIONS: "Điểm đến nổi bật",
  TRENDING_HOT: "Đang hot",
  VIEW_BTN: "Xem",
};

export const COMMUNITY_COMPOSER = {
  PLACEHOLDER: "Bạn vừa khám phá điều gì trên hành trình của mình?",
  ADD_IMAGE: "Thêm ảnh",
  TAG_LOCATION: "Gắn địa điểm",
  TAG_MILESTONE: "Gắn cột mốc",
};

export const COMMUNITY_POST = {
  HOT_BADGE: "Đang Hot",
  OPTIONS_ARIA: "Tùy chọn chuyến đi",
  LEVEL_LABEL: "Level",
  LOVE_BTN: "❤️ Yêu thích",
  COMMENT_BTN: "💬 Bình luận",
  SAVE_BTN: "🔖 Lưu",
};

export const COMMUNITY_CHAT = {
  HEADER_ACTIVE: "Đang hoạt động",
  HEADER_OFFLINE: "Ngoại tuyến",
  CALL_ARIA: "Gọi điện",
  CLOSE_ARIA: "Đóng chat",
  HEADER_TITLE: "Hộp tin nhắn thoại",
  INPUT_PLACEHOLDER: "Nhập tin nhắn...",
  SEND_ARIA: "Gửi",
  ATTACH_IMAGE: "Ảnh",
  ATTACH_LOCATION: "Địa điểm",
  ATTACH_SCHEDULE: "Lịch trình",
};

// ============================================
// AWARDS FEATURE
// ============================================

export const AWARDS_HERO = {
  BADGE: "Danh hiệu & Thành tích",
  TITLE: "Nhận diện những nhà thám hiểm huyền thoại",
  DESCRIPTION: "Kiếm được những danh hiệu độc quyền bằng cách hoàn thành yêu cầu, khám phá địa điểm mới và chia sẻ trải nghiệm của bạn với cộng đồng.",
};

export const AWARDS_STATS = {
  AVAILABLE_BADGES: "Danh hiệu khả dụng",
  STAT_BADGES: "42",
  STAT_EXPLORERS: "1.5K+",
  EXPLORER_LABEL: "Nhà thám hiểm",
  STAT_LOCATIONS: "98+",
  LOCATIONS_LABEL: "Địa điểm khám phá",
};

export const AWARDS_TABS = {
  ALL: "Tất cả",
  COMPLETED: "Hoàn thành",
  IN_PROGRESS: "Đang tiến hành",
};

export const AWARDS_STATS_PERSONAL = {
  YOUR_EXPLORER: "Nhà du hành của bạn",
  CONTINUE_EXPLORE: "Tiếp tục khám phá để mở khóa thêm danh hiệu",
  TOTAL_XP: "Tổng XP",
  COINZ: "Coinz",
  BADGES: "Danh hiệu",
  LEVEL_PROGRESS: (level) => `Tiến độ đến Level ${level}`,
  XP_NEEDED: (xp) => `Cần thêm ${xp} XP`,
};

export const AWARDS_EMPTY = {
  NO_ACHIEVEMENTS: "Chưa có danh hiệu",
  EXPLORE_CTA: "Bắt đầu khám phá và hoàn thành nhiệm vụ để kiếm được danh hiệu đáng tự hào.",
};

export const AWARDS_MODAL = {
  CLOSE_BTN: "Đóng",
  SHARE_BTN: "Chia sẻ thành tích",
  DESCRIPTION: "Mô tả",
  PROGRESS: "Tiến độ",
  NEW_BADGE: "Mới",
  COMPLETED: "Hoàn thành",
  XP_REWARD: "XP",
  COINZ_REWARD: "Coinz",
  POINTS_REWARD: "Điểm",
  UNLOCKED_DATE: "Đã mở khóa vào",
};

// ============================================
// COMMON UI TEXT
// ============================================

export const COMMON_UI = {
  LEVEL: "Level",
  WEEK: "Tuần này",
};

// ============================================
// USER RANKS & BADGES
// ============================================

export const USER_RANKS = {
  TRAVELER: "Nhà lữ hành",
  EXPLORER: "Nhà Khám Phá",
  LEGENDARY: "Huyền Thoại",
  TRENDING: "Nổi bật",
  ACTIVE: "Năng động",
  RISING: "Đang lên",
  DISCOVERER: "Người khám phá",
};

export const BADGE_TIERS = {
  COMMON: "Mới bắt đầu",
  RARE: "Nhà Khám Phá",
  EPIC: "Huyền Thoại",
  LEGENDARY: "Độc quyền",
};
