import { get } from "./requester";

const BASE_URL = `http://localhost:3030/data/posts`;
  
export const getAllPosts = () => get(BASE_URL);

export const getOnePost = (id) => get(`${BASE_URL}/${id}`);


