import { useEffect, useState } from "react";
import { createPosts, getAllPosts, getOnePost, updatePosts } from "../api/posts-api";

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

export function useGetOnePost(postId) {
    const [post, setPost] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getOnePost(postId);
            setPost(result);

        })();
    }, []);

    return [post, setPost];
}

export function useCreatePosts() {
    const postsCreateHandler = (data) => createPosts(data);

    return postsCreateHandler;
}

export function useUpdatePosts() {
    const postsUpdateHandler = (postId, postData) => updatePosts(postId, postData);

    return postsUpdateHandler;
}

