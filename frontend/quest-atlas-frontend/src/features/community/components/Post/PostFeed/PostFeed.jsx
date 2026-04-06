import { communityPosts } from "../../../data/communityData";
import PostCard from "../PostCard/PostCard";

export default function PostFeed() {
  return (
    <>
      {communityPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}