import { useParams } from "react-router-dom";
import { useGetAllByType } from "../../hooks/useSpace";
import ExploreCatalogCard from "./explore-catalog-card/ExploreCatalogCard";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

export default function ExploreCatalog() {
    const { name } = useParams();
    const [spaceData, isPending] = useGetAllByType(name)

    return (
        <>
            {isPending
                ? (
                    <div className="loading">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="flex flex-wrap mx-10 my-10">
                        {spaceData.map(spaceBody => <ExploreCatalogCard key={spaceBody._id} {...spaceBody} name={name} />)}
                    </div>
                )
            }
        </>
    );
}