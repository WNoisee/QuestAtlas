import styles from "./Icon.module.css";
import { Star, MessageCircle, Heart, MapPin, Camera, StarIcon, Phone, Sparkle, X, MessageCircleHeart, Send  } from "lucide-react";

const IconList = {
    starIcon: StarIcon,
    star: Star,
    comment: MessageCircle,
    heart: Heart,
    location: MapPin,
    camera: Camera,
    phone: Phone,
    sparkle: Sparkle,
    close: X,
    message: MessageCircleHeart,
    send : Send
};

export default function Icon({ children, symbol = "", size = "" }) {
    const Component = IconList[symbol];
    return (
        <i className={styles[symbol]}>
            {Component ? <Component size={size} fill="currentColor"/> : children}
        </i>
    );
}