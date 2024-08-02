import { post, get } from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments'

export const createComment = (id, text) => post(BASE_URL, { id, text });

export const getAllComments = (id) => {
    const params = new URLSearchParams({
        where: `id="${id}"`,
        load: `author=_ownerId:users`
    })
    
    return get(`${BASE_URL}?${params.toString()}`);
}
