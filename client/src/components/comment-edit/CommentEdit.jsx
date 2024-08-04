import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneComment, useUpdateComment } from "../../hooks/useComments";

export default function CommentEdit() {
    const update = useUpdateComment();
    const navigate = useNavigate();
    const { postId, commentId } = useParams();
    const [comment] = useGetOneComment(commentId)

    const updateHandler = async (values) => {
        try {
            const updatedComment = await update(commentId, values);

            navigate(`/posts/${postId}`)

        } catch (err) {
            console.log(err.messege);
        }
    }

    const { changeHandler, submitHandler, values } = useForm(comment, updateHandler)

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Edit comment
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="text" className="block text-lg font-medium leading-6 text-white">
                            Comment
                        </label>
                        <div className="mt-2">
                            <input
                                id="text"
                                name="text"
                                value={values.text}
                                onChange={changeHandler}
                                type="text"
                                required
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}