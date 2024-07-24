import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CatalogCardDetails() {

    const { name, id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData();

        async function fetchData() {
            const response = await fetch(`http://localhost:3030/jsonstore/${name}/${id}`);
            const result = await response.json();
            setData(result);
        }
    }, []);

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-20">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={data.image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-purple-500 antialiased">
                            {data.title}
                        </h1>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Type: {data.type}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Distance from Earth: {data.distanceFromEarth}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Age: {data.age}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Description: {data.description}
                        </p>
                    </div>

                </div>
            </div>

            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
        </>

    );
}