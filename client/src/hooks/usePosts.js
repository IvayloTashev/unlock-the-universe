import { useEffect, useState } from "react";
import { createPosts, getAllPosts, getOnePost } from "../api/posts-api";

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

export function useCreatePosts() {
    const postsCreateHandler = (data) => createPosts(data);

    return postsCreateHandler;
}