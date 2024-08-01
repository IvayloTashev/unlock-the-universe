import { useState, useEffect } from "react";
import PostsCard from "./posts-card/PostsCard";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();

        async function fetchData() {
            const response = await fetch(`http://localhost:3030/data/posts`);
            const result = await response.json();
            setPosts(result);
        }
    }, []);

    return (
        <div className="flex flex-wrap mx-10 my-10">
            {posts.map(post => <PostsCard key={post._id} {...post} />)}
        </div>

    );
}