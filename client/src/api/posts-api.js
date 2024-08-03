import { del, get, post, put } from "./requester";

const BASE_URL = `http://localhost:3030/data/posts`;

export const getAllPosts = () => get(BASE_URL);

export const getOnePost = (postId) => get(`${BASE_URL}/${postId}`);

export const createPosts = (data) => post(BASE_URL, data);

export const deletePosts = (postId) => del(`${BASE_URL}/${postId}`);

export const updatePosts = (postId, postData) => put(`${BASE_URL}/${postId}`, postData);
