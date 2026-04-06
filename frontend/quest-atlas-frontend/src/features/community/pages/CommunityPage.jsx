import styles from "./CommunityPage.module.css";
import CommunityHero from "../components/CommunityHero/CommunityHero";
import CommunityTabs from "../components/CommunityTabs/CommunityTabs";
import PostComposer from "../components/Post/PostComposer/PostComposer";
import PostFeed from "../components/Post/PostFeed/PostFeed";
import CommunitySidebar from "../components/CommunitySidebar/CommunitySidebar";
import ChatDock from "../components/Chat/ChatDock/ChatDock";

export default function CommunityPage() {
  return (
    <main className={`${styles.communityPage} page-accent-community`}>
      <CommunityHero />
      <CommunityTabs />

      <section className={styles.communityBody}>
        <div className={styles.feedColumn}>
          <PostComposer />
          <PostFeed />
        </div>

        <aside className={styles.sidebarColumn}>
          <CommunitySidebar />
        </aside>
      </section>

      <ChatDock />
    </main>
  );
}