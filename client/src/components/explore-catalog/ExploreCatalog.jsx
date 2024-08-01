import { useState, useEffect } from "react";
import ExploreCatalogCard from "./explore-catalog-card/ExploreCatalogCard";
import { useParams } from "react-router-dom";

export default function ExploreCatalog() {
    const [data, setData] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetchData();

        async function fetchData() {
            const response = await fetch(`http://localhost:3030/data/${name}/`);
            const result = await response.json();
            setData(result);
        }
    }, []);

    return (
        <div className="flex flex-wrap mx-10 my-10">
            {data.map(x => <ExploreCatalogCard key={x._id} data={x} name={name} />)}
        </div>

    );
}