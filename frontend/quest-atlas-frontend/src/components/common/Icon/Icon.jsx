import styles from "./Icon.module.css";
import { Star, MessageCircle, Heart, MapPin, Camera, StarIcon } from "lucide-react";

const IconList = {
    starIcon: StarIcon,
    star: Star,
    comment: MessageCircle,
    heart: Heart,
    location: MapPin,
    camera: Camera,
};

export default function Icon({ children, symbol = "", size = "" }) {
    const Component = IconList[symbol];
    return (
        <div className={styles[symbol]}>
            {Component ? <Component size={size} fill="currentColor"/> : children}
        </div>
    );
}