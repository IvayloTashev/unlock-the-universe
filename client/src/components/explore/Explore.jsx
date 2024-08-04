import ExploreCard from "./explore-card/ExploreCard";

const celestialBodies = [
    { title: "Stars", image: "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp?w=1920", urlTitle: "stars", description: "Stars are giant balls of hot gas - mostly hydrogen, with some helium and small amounts of other elements. Every star has its own life cycle, ranging from a few million to trillions of years, and its properties change as it ages." },
    { title: "Planets", image: "https://img.freepik.com/free-photo/planets-solar-system_23-2150042459.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=ais_hybrid", urlTitle: "planets", description: "A planet is a celestial body that is in orbit around the star, has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium shape, and has cleared the neighborhood around its orbit." },
    { title: "Galaxies", image: "https://cdn.theatlantic.com/thumbor/cOJT3NgUpm_xigNqb7pz7yEGV9Q=/0x0:2133x1200/960x540/media/img/mt/2022/08/noirlab2219a/original.jpg", urlTitle: "galaxies", description: "Galaxies consist of stars, planets, and vast clouds of gas and dust, all bound together by gravity. The largest contain trillions of stars and can be more than a million light-years across. The smallest can contain a few thousand stars and span just a few hundred light-years." },
    { title: "Black Holes", image: "https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg", urlTitle: "blackHoles", description: "A black hole is an astronomical object with a gravitational pull so strong that nothing, not even light, can escape it. A black hole's “surface,” called its event horizon, defines the boundary where the velocity needed to escape exceeds the speed of light, which is the speed limit of the cosmos." }
]

export default function Explore() {
    return (
        <div className="flex flex-wrap mx-10 my-10">
            {celestialBodies.map(body => <ExploreCard key={body.title} {...body}></ExploreCard>)}
        </div>
    );
}