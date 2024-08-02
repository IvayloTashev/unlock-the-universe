import ExploreCatalogCard from "./explore-catalog-card/ExploreCatalogCard";
import { useParams } from "react-router-dom";
import { useGetAllByType } from "../../hooks/useSpace";

export default function ExploreCatalog() {
    const { name } = useParams();
    const [spaceData] = useGetAllByType(name)

    return (
        <div className="flex flex-wrap mx-10 my-10">
            {spaceData.map(spaceBody => <ExploreCatalogCard key={spaceBody._id} {...spaceBody} name={name} />)}
        </div>

    );
}