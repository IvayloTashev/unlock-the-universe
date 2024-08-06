import { get } from "./requester";

const BASE_URL = `http://localhost:3030/data`;
const NASA_URL = `https://api.nasa.gov/planetary/apod?api_key=z2yv1z4qkLlqevZsY40ZoZmpuJLqWr1ad5NcwBe4`;
  
export const getAllbyType = (name) => get(`${BASE_URL}/${name}`);

export const getCelestialBodies = () => get(`${BASE_URL}/celestialBodies`);

export const getOnebyId = (name, id) => get(`${BASE_URL}/${name}/${id}`);

export const getNasaPicture = () => get(NASA_URL);

