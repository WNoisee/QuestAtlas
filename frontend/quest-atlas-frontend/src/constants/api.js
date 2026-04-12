/**
 * API Endpoints Configuration
 * Centralized API endpoints for all backend calls
 * 
 * Usage:
 * import { API_ENDPOINTS } from '@/constants/api'
 * fetch(API_ENDPOINTS.USERS.GET_PROFILE)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3005/api";

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`,
    VERIFY_EMAIL: `${API_BASE_URL}/auth/verify-email`,
    RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  },

  // Users
  USERS: {
    GET_PROFILE: `${API_BASE_URL}/users/profile`,
    UPDATE_PROFILE: `${API_BASE_URL}/users/profile`,
    GET_USER_BY_ID: (id) => `${API_BASE_URL}/users/${id}`,
    GET_LEADERBOARD: `${API_BASE_URL}/users/leaderboard`,
    GET_TOP_TRAVELERS: `${API_BASE_URL}/users/top-travelers`,
  },

  // Destinations
  DESTINATIONS: {
    GET_ALL: `${API_BASE_URL}/destinations`,
    GET_BY_ID: (id) => `${API_BASE_URL}/destinations/${id}`,
    SEARCH: `${API_BASE_URL}/destinations/search`,
    GET_BY_CATEGORY: (category) => `${API_BASE_URL}/destinations/category/${category}`,
    GET_TRENDING: `${API_BASE_URL}/destinations/trending`,
  },

  // Journeys / Routes
  JOURNEYS: {
    GET_ALL: `${API_BASE_URL}/journeys`,
    GET_BY_ID: (id) => `${API_BASE_URL}/journeys/${id}`,
    CREATE: `${API_BASE_URL}/journeys`,
    UPDATE: (id) => `${API_BASE_URL}/journeys/${id}`,
    DELETE: (id) => `${API_BASE_URL}/journeys/${id}`,
    GET_MY_JOURNEYS: `${API_BASE_URL}/journeys/my-journeys`,
    GET_TRENDING_JOURNEYS: `${API_BASE_URL}/journeys/trending`,
  },

  // Posts / Community
  POSTS: {
    GET_ALL: `${API_BASE_URL}/posts`,
    GET_BY_ID: (id) => `${API_BASE_URL}/posts/${id}`,
    CREATE: `${API_BASE_URL}/posts`,
    UPDATE: (id) => `${API_BASE_URL}/posts/${id}`,
    DELETE: (id) => `${API_BASE_URL}/posts/${id}`,
    GET_MY_POSTS: `${API_BASE_URL}/posts/my-posts`,
    GET_FEED: `${API_BASE_URL}/posts/feed`,
    GET_TRENDING: `${API_BASE_URL}/posts/trending`,
    LIKE: (id) => `${API_BASE_URL}/posts/${id}/like`,
    UNLIKE: (id) => `${API_BASE_URL}/posts/${id}/unlike`,
    COMMENT: (id) => `${API_BASE_URL}/posts/${id}/comments`,
    GET_COMMENTS: (id) => `${API_BASE_URL}/posts/${id}/comments`,
  },

  // Badges / Awards
  BADGES: {
    GET_ALL: `${API_BASE_URL}/badges`,
    GET_BY_ID: (id) => `${API_BASE_URL}/badges/${id}`,
    GET_USER_BADGES: (userId) => `${API_BASE_URL}/users/${userId}/badges`,
    GET_MY_BADGES: `${API_BASE_URL}/badges/my-badges`,
    UNLOCK: (id) => `${API_BASE_URL}/badges/${id}/unlock`,
  },

  // Achievements / Quests
  ACHIEVEMENTS: {
    GET_ALL: `${API_BASE_URL}/achievements`,
    GET_BY_ID: (id) => `${API_BASE_URL}/achievements/${id}`,
    GET_USER_ACHIEVEMENTS: (userId) => `${API_BASE_URL}/users/${userId}/achievements`,
    GET_MY_ACHIEVEMENTS: `${API_BASE_URL}/achievements/my-achievements`,
    COMPLETE: (id) => `${API_BASE_URL}/achievements/${id}/complete`,
  },

  // Chat / Messages
  CHAT: {
    GET_CONVERSATIONS: `${API_BASE_URL}/chat/conversations`,
    GET_CONVERSATION_BY_ID: (id) => `${API_BASE_URL}/chat/conversations/${id}`,
    CREATE_CONVERSATION: `${API_BASE_URL}/chat/conversations`,
    GET_MESSAGES: (conversationId) => `${API_BASE_URL}/chat/conversations/${conversationId}/messages`,
    SEND_MESSAGE: (conversationId) => `${API_BASE_URL}/chat/conversations/${conversationId}/messages`,
  },

  // Explore / Suggestions
  EXPLORE: {
    GET_AI_SUGGESTIONS: `${API_BASE_URL}/explore/ai-suggestions`,
    GET_FILTERED_DESTINATIONS: `${API_BASE_URL}/explore/filter`,
    GET_ROUTE_SUGGESTIONS: `${API_BASE_URL}/explore/routes`,
  },

  // Weather
  WEATHER: {
    GET_WEATHER: (lat, long) => `${API_BASE_URL}/weather?lat=${lat}&long=${long}`,
    GET_FORECAST: (lat, long) => `${API_BASE_URL}/weather/forecast?lat=${lat}&long=${long}`,
  },

  // Search
  SEARCH: {
    GLOBAL: `${API_BASE_URL}/search`,
    DESTINATIONS: `${API_BASE_URL}/search/destinations`,
    USERS: `${API_BASE_URL}/search/users`,
    POSTS: `${API_BASE_URL}/search/posts`,
  },
};

/**
 * API Request Types / Methods
 */
export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

/**
 * Response Status Codes
 */
export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

/**
 * Common Error Messages
 */
export const API_ERRORS = {
  NETWORK_ERROR: "Network connection error. Please try again.",
  TIMEOUT: "Request timeout. Please try again.",
  INVALID_REQUEST: "Invalid request. Please check your input.",
  UNAUTHORIZED: "You are not authorized to access this resource.",
  FORBIDDEN: "You don't have permission to perform this action.",
  NOT_FOUND: "Resource not found.",
  SERVER_ERROR: "Server error. Please try again later.",
  UNKNOWN_ERROR: "An unknown error occurred. Please try again.",
};
