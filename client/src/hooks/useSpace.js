import { useEffect, useState } from "react";
import { getAllbyType, getNasaPicture, getOnebyId } from "../api/space-api";

export function useGetAllByType(name) {
    const [spaceData, setSpaceData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllbyType(name);
            setSpaceData(result);

        })();
    }, []);

    return [spaceData, setSpaceData];
}

export function useGetOneById(name, id) {
    const [spaceData, setSpaceData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getOnebyId(name, id);
            setSpaceData(result);

        })();
    }, []);

    return [spaceData, setSpaceData];
}

export function useGetNasaPicture() {
    const [nasaPicture, setNasaPicture] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getNasaPicture();
            setNasaPicture(result);

        })();
    }, []);

    return [nasaPicture, setNasaPicture];
}