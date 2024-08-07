import PostsCard from "./posts-card/PostsCard";
import { useGetAllPosts } from "../../hooks/usePosts";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

export default function Posts() {
    const [posts, isPending] = useGetAllPosts();

    return (
        <>
            {isPending
                ? (
                    <div className="loading">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="flex flex-wrap mx-10 my-10">
                        {posts.map(post => <PostsCard key={post._id} {...post} />)}
                    </div>
                )
            }
        </>
    );
}