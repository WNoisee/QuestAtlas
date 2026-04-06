/**
 * Icon Components & Utilities
 * Centralized icon management for the entire application
 * 
 * Icons can be used via:
 * 1. Icon component with symbol: <Icon symbol="star" size="md" />
 * 2. Direct Lucide import: <ArrowRightToLine size={16} />
 */

import {
  Star,
  MessageCircle,
  Heart,
  MapPin,
  Camera,
  Phone,
  Sparkles,
  X,
  MessageCircleHeart,
  Send,
  Rocket,
  Map,
  Compass,
  CloudSun,
  ArrowRightToLine,
  Flame,
  Navigation2,
  Clock,
  Award,
} from "lucide-react";

/**
 * Icon Symbol Mapping
 * Maps string symbols to Lucide React components
 */
export const ICON_COMPONENTS = {
  // Social & Engagement
  star: Star,
  comment: MessageCircle,
  heart: Heart,
  message: MessageCircleHeart,
  
  // Location & Navigation
  location: MapPin,
  map: Map,
  compass: Compass,
  pin: MapPin,
  navigation: Navigation2,
  
  // UI & Actions
  camera: Camera,
  phone: Phone,
  sparkle: Sparkles,
  close: X,
  send: Send,
  
  // Feature Icons
  rocket: Rocket,
  weather: CloudSun,
  flame: Flame,
  clock: Clock,
  award: Award,
  arrowRight: ArrowRightToLine,
};

/**
 * Icon Presets
 * Pre-configured icon usage patterns
 */
export const ICON_PRESETS = {
  // Header
  LOGIN_ARROW: {
    component: ArrowRightToLine,
    size: 16,
    className: "login-icon",
  },
  
  // Hero Section
  ROCKET_HERO: {
    symbol: "rocket",
    size: "md",
  },
  MAP_HERO: {
    symbol: "map",
    size: "md",
  },
  LOCATION_HERO: {
    symbol: "location",
    size: "md",
  },
  COMPASS_HERO: {
    symbol: "compass",
    size: "md",
  },
  WEATHER_HERO: {
    symbol: "weather",
    size: "md",
  },
  
  // Posts
  FLAME_HOT: {
    component: Flame,
    size: 14,
  },
  LOCATION_POST: {
    component: MapPin,
    size: 16,
  },
  HEART_ENGAGEMENT: {
    component: Heart,
    size: 16,
  },
  COMMENT_ENGAGEMENT: {
    component: MessageCircle,
    size: 16,
  },
  BOOKMARK_ENGAGEMENT: {
    component: Sparkles,
    size: 16,
  },
  
  // Chat
  PHONE_CALL: {
    symbol: "phone",
    size: "sm",
  },
  CLOSE_CHAT: {
    symbol: "close",
    size: "md",
  },
  SEND_MESSAGE: {
    symbol: "send",
    size: "sm",
  },
  
  // UI Controls
  CLOSE_MODAL: {
    component: X,
    size: 24,
  },
};

/**
 * Get icon component by symbol
 * 
 * @param {string} symbol - Icon symbol name
 * @returns {React.Component} Lucide React component
 */
export const getIconComponent = (symbol) => {
  return ICON_COMPONENTS[symbol] || null;
};

/**
 * Get preset icon configuration
 * 
 * @param {string} presetName - Preset name
 * @returns {object} Icon configuration
 */
export const getIconPreset = (presetName) => {
  return ICON_PRESETS[presetName] || {};
};

/**
 * Lucide Icon Exports (for direct imports)
 * Re-export commonly used icons for convenience
 */
export {
  ArrowRightToLine,
  Flame,
  MapPin,
  Heart,
  MessageCircle,
  Clock,
  Award,
  X,
  Rocket,
  Send,
  Phone,
  Sparkles,
  Map,
  Compass,
  CloudSun,
  Navigation2,
  MessageCircleHeart,
  Star,
  Camera,
};
