import { useEffect, useState } from "react";
import { getAllbyType, getCelestialBodies, getNasaPicture, getOnebyId } from "../api/space-api";

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
    const [nasaPicture, setNasaPicture] = useState({});
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        (async () => {
            setIsPending(true);
            const result = await getNasaPicture();
            setIsPending(false);
            setNasaPicture(result);
        })();
    }, []);

    return [nasaPicture, isPending];
}

export function useGetCelestialBodies() {
    const [celestialBodies, SetCelestialBodies] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        (async () => {
            setIsPending(true);
            const result = await getCelestialBodies();
            setIsPending(false);
            SetCelestialBodies(result);
        })();
    }, []);

    return [celestialBodies, isPending];
}