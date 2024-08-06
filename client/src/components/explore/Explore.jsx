import { useGetCelestialBodies } from "../../hooks/useSpace";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import ExploreCard from "./explore-card/ExploreCard";

export default function Explore() {
    const [celestialBodies, isPending] = useGetCelestialBodies();

    return (
        <>
            {isPending
                ? (
                    <div className="loading">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="flex flex-wrap mx-10 my-10">
                        {celestialBodies.map(body => <ExploreCard key={body.title} {...body}></ExploreCard>)}
                    </div>
                )
            }
        </>
    );
}