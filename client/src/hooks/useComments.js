import { useEffect, useState } from "react";
import { createComment, getAllComments } from "../api/comments-api";

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
