import PostsCard from "./posts-card/PostsCard";
import { useGetAllPosts } from "../../hooks/usePosts";

export default function Posts() {
    const [posts] = useGetAllPosts();

    return (
        <div className="flex flex-wrap mx-10 my-10">
            {posts.map(post => <PostsCard key={post._id} {...post} />)}
        </div>

    );
}