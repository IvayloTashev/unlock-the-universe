import { useEffect, useState } from "react";
import { getAllPosts, getOnePost } from "../api/posts-api";

export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllPosts();
            setPosts(result);

        })();
    }, []);

    return [posts, setPosts];
}

export function useGetOnePost(id) {
    const [post, setPost] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getOnePost(id);
            setPost(result);

        })();
    }, []);

    return [post, setPost];
}