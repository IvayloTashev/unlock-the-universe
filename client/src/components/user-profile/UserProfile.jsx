import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllPosts } from "../../hooks/usePosts";
import PostsCard from "../posts/posts-card/PostsCard";

export default function UserProfile() {
    const [posts] = useGetAllPosts();
    const { email, userId } = useAuthContext();
    const userPosts = posts.filter(post => post._ownerId === userId);
    const postTitles = userPosts.map(post => post.title);

    return (
        <>
            <div className="max-w-4xl mx-auto my-5 bg-white rounded-lg shadow-md p-5">
                <div className="text-center text-5xl">
                    <i className="fa-solid fa-user "></i>
                </div>
                <h2 className="text-center text-2xl font-semibold mt-2">Email: {email}</h2>
                <p className="text-left text-xl font-semibold mt-2">Posts titles: {userPosts.length ? postTitles.join(', ') : "there is no posts"} </p>
                <p className="text-left text-xl font-semibold mt-2">Number of posts: {userPosts.length} </p>
                <div className="flex justify-center mt-5">
                </div>
            </div>

            {userPosts.length
                ? (
                    <div className="flex flex-wrap mx-10 my-10">
                        {userPosts.map(post => <PostsCard key={post._id} {...post} />)}
                    </div>
                )
                : (
                    <>
                        <div className="mx-auto w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-5 my-10">
                            <div className="p-6 text-center">
                                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    There is no posts.
                                </h4>
                                <div className="my-5">
                                </div>
                                <div>
                                    <Link
                                        to={`/create`}
                                        type="submit"
                                        className="inset-x-10 bottom-3 rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Create post
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
                )
            }

        </>

    );
}