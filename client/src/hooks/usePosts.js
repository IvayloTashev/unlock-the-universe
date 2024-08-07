import { useEffect, useState } from "react";
import { createPosts, getAllPosts, getOnePost, updatePosts } from "../api/posts-api";

export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        (async () => {
            setIsPending(true)
            const result = await getAllPosts();
            setIsPending(false)
            setPosts(result);

        })();
    }, []);

    return [posts, isPending];
}

export function useGetOnePost(postId) {
    const [post, setPost] = useState({
        title: '',
        image: '',
        description: '',
    });

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

