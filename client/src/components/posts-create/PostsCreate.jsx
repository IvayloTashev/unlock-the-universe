import { useNavigate } from "react-router-dom";
import { useCreatePosts } from "../../hooks/usePosts";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = {
    title: '',
    image: '',
    description: '',
}

export default function PostsCreate() {

    const create = useCreatePosts();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [isError, setIsError] = useState(false);

    const createHandler = async (values) => {
        try {
            const newPost = await create(values);
            navigate(`/posts/${newPost._id}`)

        } catch (err) {
            setError(err.message);
            setIsError(true);
            return
        }
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, createHandler)

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create post
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium leading-6 text-white">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                value={values.title}
                                onChange={changeHandler}
                                type="text"
                                required
                                autoComplete="title"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="description" className="block text-lg font-medium leading-6 text-white">
                                Description
                            </label>
                            <div className="text-sm">
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={changeHandler}
                                type="text"
                                required
                                autoComplete="description"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-lg font-medium leading-6 text-white">
                            Image URL
                        </label>
                        <div className="mt-2">
                            <input
                                id="image"
                                name="image"
                                value={values.image}
                                onChange={changeHandler}
                                type="text"
                                required
                                autoComplete="image"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
            {isError && (
                <p className="block text-lg text-center font-medium leading-6 text-white mt-10 decoration-rose-500 ">
                    {error}
                </p>
            )}
        </div>
    )
}