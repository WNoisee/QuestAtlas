import styles from "./Icon.module.css";
import clsx from "clsx";
import {
  Star,
  MessageCircle,
  Heart,
  MapPin,
  Camera,
  StarIcon,
  Phone,
  Sparkles,
  X,
  MessageCircleHeart,
  Send,
  Rocket,
  Map,
  Compass,
  CloudSun,
  Lock,
  Check,
  Trophy,
  Coins,
} from "lucide-react";

const iconList = {
  starIcon: StarIcon,
  star: Star,
  comment: MessageCircle,
  heart: Heart,
  location: MapPin,
  camera: Camera,
  phone: Phone,
  sparkle: Sparkles,
  close: X,
  message: MessageCircleHeart,
  send: Send,
  rocket: Rocket,
  map: Map,
  compass: Compass,
  weather: CloudSun,
  lock: Lock,
  check: Check,
  trophy: Trophy,
  coins: Coins,
};

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export default function Icon({
  children,
  symbol = "",
  size = "sm",
  color = "currentColor",
  strokeWidth = 2,
  filled = false,
  className = "",
  animate = false,
  ...props
}) {
  const Component = iconList[symbol];
  const resolvedSize = sizeMap[size] || sizeMap.sm;

  const isFilled = filled || symbol === "star";

  return (
    <li
      className={clsx(
        styles.icon,
        symbol && styles[symbol],
        {
          [styles.animateStar]: animate && symbol === "star",
          [styles.animateBurst]: animate && symbol === "star",
        },
        className
      )}
      {...props}
    >
      {children ? (
        children
      ) : Component ? (
        <Component
          size={resolvedSize}
          color={color}
          strokeWidth={strokeWidth}
          fill={isFilled ? "currentColor" : "none"}
        />
      ) : null}
    </li>
  );
}