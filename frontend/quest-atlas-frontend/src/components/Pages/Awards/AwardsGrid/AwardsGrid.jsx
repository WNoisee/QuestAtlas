import { useState } from "react";
import styles from "./AwardsGrid.module.css";
import AwardCard from "../AwardCard/AwardCard";
import AchievementTabs from "../AchievementTabs/AchievementTabs";
import AchievementModal from "../AchievementModal/AchievementModal";
import EmptyState from "../EmptyState/EmptyState";
import Text from "../../../common/Text/Text";

const awardCategories = [
  {
    category: "Exploration",
    awards: [
      {
        id: 1,
        name: "First Steps into Unknown",
        description: "Begin your journey by exploring your first 5 destinations",
        icon: "🗺️",
        difficulty: "Dễ",
        rarity: "common",
        progress: 100,
        isNew: true,
        reward: { xp: 100, coins: 50 },
        current: 5,
        target: 5,
        unlockedDate: "3 ngày trước",
      },
      {
        id: 2,
        name: "Mountain Conqueror",
        description: "Stand atop 20 peaks and touch the sky with your spirit",
        icon: "🏔️",
        difficulty: "Trung bình",
        rarity: "rare",
        progress: 65,
        isNew: false,
        reward: { xp: 250, coins: 150 },
        current: 13,
        target: 20,
      },
      {
        id: 3,
        name: "Cartographer's Dream",
        description: "Unlock the complete map by discovering all 50 legendary locations",
        icon: "🧭",
        difficulty: "Khó",
        rarity: "epic",
        progress: 34,
        isNew: false,
        reward: { xp: 500, coins: 300 },
        current: 17,
        target: 50,
      },
      {
        id: 4,
        name: "Around the World in Legend",
        description: "Cross continents and explore 10 countries on your atlas",
        icon: "🌍",
        difficulty: "Khó",
        rarity: "legendary",
        progress: 20,
        isNew: false,
        reward: { xp: 400, coins: 250 },
        current: 2,
        target: 10,
      },
    ],
  },
  {
    category: "Survival Challenges",
    awards: [
      {
        id: 5,
        name: "Story Keeper",
        description: "Share 10 tales of your adventures with the community",
        icon: "✍️",
        difficulty: "Dễ",
        rarity: "common",
        progress: 80,
        isNew: true,
        reward: { xp: 150, coins: 75 },
        current: 8,
        target: 10,
      },
      {
        id: 6,
        name: "Legendary Narrator",
        description: "Your stories inspire 100 hearts across the realm",
        icon: "📖",
        difficulty: "Trung bình",
        rarity: "rare",
        progress: 42,
        isNew: false,
        reward: { xp: 200, coins: 120 },
        current: 42,
        target: 100,
      },
      {
        id: 7,
        name: "Beacon of the Community",
        description: "Become a guiding light followed by 500 fellow adventurers",
        icon: "👑",
        difficulty: "Khó",
        rarity: "epic",
        progress: 15,
        isNew: false,
        reward: { xp: 450, coins: 300 },
        current: 75,
        target: 500,
      },
      {
        id: 8,
        name: "Wisdom Guardian",
        description: "Help 50 travelers with your knowledge and experience",
        icon: "🤝",
        difficulty: "Trung bình",
        rarity: "legendary",
        progress: 56,
        isNew: false,
        reward: { xp: 180, coins: 100 },
        current: 28,
        target: 50,
      },
    ],
  },
  {
    category: "Milestones",
    awards: [
      {
        id: 9,
        name: "Storm Chaser",
        description: "Dare to travel when the weather brings terror and wonder",
        icon: "⛈️",
        difficulty: "Rất khó",
        rarity: "legendary",
        progress: 0,
        isNew: false,
        reward: { xp: 600, coins: 400 },
        current: 0,
        target: 1,
      },
      {
        id: 10,
        name: "Desert's Child",
        description: "Complete 5 journeys under the scorching sun across golden sands",
        icon: "☀️",
        difficulty: "Trung bình",
        rarity: "rare",
        progress: 40,
        isNew: false,
        reward: { xp: 180, coins: 100 },
        current: 2,
        target: 5,
      },
      {
        id: 11,
        name: "Night's Whisper",
        description: "Discover 3 sacred places under the watchful gaze of moonlight",
        icon: "🌙",
        difficulty: "Dễ",
        rarity: "common",
        progress: 100,
        isNew: false,
        reward: { xp: 120, coins: 60 },
        current: 3,
        target: 3,
        unlockedDate: "1 tuần trước",
      },
      {
        id: 12,
        name: "Blizzard Master",
        description: "Venture through frozen wastelands in search of untold secrets",
        icon: "❄️",
        difficulty: "Rất khó",
        rarity: "epic",
        progress: 0,
        isNew: false,
        reward: { xp: 600, coins: 400 },
        current: 0,
        target: 1,
      },
    ],
  },
];

// Flatten all awards
const allAwards = awardCategories.flatMap((cat) =>
  cat.awards.map((award) => ({ ...award, category: cat.category }))
);

export default function AwardsGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter awards based on active tab
  const getFilteredAwards = () => {
    switch (activeTab) {
      case "completed":
        return allAwards.filter((award) => award.progress === 100);
      case "progress":
        return allAwards.filter((award) => award.progress > 0 && award.progress < 100);
      case "all":
      default:
        return allAwards;
    }
  };

  const filteredAwards = getFilteredAwards();

  // Calculate stats
  const stats = {
    total: allAwards.length,
    completed: allAwards.filter((a) => a.progress === 100).length,
    inProgress: allAwards.filter((a) => a.progress > 0 && a.progress < 100).length,
  };

  const handleAwardClick = (award) => {
    setSelectedAchievement(award);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  // Group filtered awards by category
  const groupedAwards = awardCategories
    .map((cat) => ({
      ...cat,
      awards: filteredAwards.filter((award) => award.category === cat.category),
    }))
    .filter((cat) => cat.awards.length > 0);

  // Show empty state if no awards in current filter
  if (filteredAwards.length === 0) {
    return (
      <div className={styles.awardsContainer}>
        <AchievementTabs activeTab={activeTab} onTabChange={setActiveTab} stats={stats} />
        <EmptyState
          message={
            activeTab === "completed"
              ? "您还没有完成任何徽章。继续探索！"
              : activeTab === "progress"
              ? "没有正在进行的徽章。"
              : "没有徽章。"
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.awardsContainer}>
      <AchievementTabs activeTab={activeTab} onTabChange={setActiveTab} stats={stats} />

      {groupedAwards.map((category) => (
        <section key={category.category} className={styles.categorySection}>
          <Text as="h2" size="xl" weight="bold" className={styles.categoryTitle}>
            {category.category}
          </Text>

          <div className={styles.awardGrid}>
            {category.awards.map((award) => (
              <AwardCard
                key={award.id}
                award={award}
                onClick={() => handleAwardClick(award)}
              />
            ))}
          </div>
        </section>
      ))}

      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
