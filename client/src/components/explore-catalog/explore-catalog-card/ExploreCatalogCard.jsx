import { Link } from "react-router-dom";

export default function ExploreCard({
    image,
    title,
    name,
    type,
    distanceFromEarth,
    _id
 }) {

    return (
        <>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-5 my-5">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={image} alt={title} className="h-full w-full" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Name: {title}
                    </h4>
                    <div className="my-10">
                        <p className="my-3">
                            Type: {type}
                        </p>
                        <p className="my-3">
                            Distance from Earth: {distanceFromEarth}
                        </p>
                    </div>
                    <div>
                        <Link
                            to={`/explore/${name}/${_id}`}
                            type="submit"
                            className="absolute inset-x-10 bottom-3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossOrigin="anonymous"
            />
        </>
    );
}