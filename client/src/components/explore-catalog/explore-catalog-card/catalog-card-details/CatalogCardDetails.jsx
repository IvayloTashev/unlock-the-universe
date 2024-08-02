import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetOneById } from "../../../../hooks/useSpace";

export default function CatalogCardDetails() {
    const { name, id } = useParams();
    const [spaceData] = useGetOneById(name, id);

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-20">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 mx-4 my-4">
                        <img
                            src={spaceData.image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-purple-500 antialiased">
                            {spaceData.title}
                        </h1>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Type: {spaceData.type}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Distance from Earth: {spaceData.distanceFromEarth}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Age: {spaceData.age}
                        </p>

                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Description: {spaceData.description}
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