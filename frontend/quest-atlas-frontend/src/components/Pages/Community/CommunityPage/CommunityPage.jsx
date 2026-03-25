import styles from "./CommunityPage.module.css";
import CommunityHero from "../CommunityHero/CommunityHero";
import CommunityTabs from "../CommunityTabs/CommunityTabs";
import PostComposer from "../Post/PostComposer/PostComposer";
import PostFeed from "../Post/PostFeed/PostFeed";
import CommunitySidebar from "../CommunitySidebar/CommunitySidebar";

export default function CommunityPage() {
  return (
    <main className={styles.communityPage}>
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
    </main>
  );
}