import { get, post } from "./requester";

const BASE_URL = `http://localhost:3030/data/posts`;
  
export const getAllPosts = () => get(BASE_URL);

export const getOnePost = (id) => get(`${BASE_URL}/${id}`);

export const createPosts = (data) => post(BASE_URL, data);