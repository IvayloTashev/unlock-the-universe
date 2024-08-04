import { useEffect, useState } from "react";
import { createComment, getAllComments, getOneComment, updateComment } from "../api/comments-api";

export function useCreateComment() {
    const commentCreateHandler = (id, comment) => createComment(id, comment);

    return commentCreateHandler;
}

export function useGetAllComments(id) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllComments(id);
            setComments(result);

        })();
    }, [id]);

    return [comments, setComments];
}

export function useUpdateComment() {
    const commentUpdateHandler = (commentId, text) => updateComment(commentId, text);

    return commentUpdateHandler;
}

export function useGetOneComment(commentId) {
    const [comment, setComment] = useState({
        text: '',
    });

    useEffect(() => {
        (async () => {
            const result = await getOneComment(commentId);
            setComment(result);

        })();
    }, []);

    return [comment, setComment];
}

