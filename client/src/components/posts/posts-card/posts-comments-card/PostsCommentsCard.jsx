import { useParams } from "react-router-dom";
import { useGetOnePost } from "../../../../hooks/usePosts";
import { useForm } from "../../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../../hooks/useComments";
import { getAllComments } from "../../../../api/comments-api";


const initialValues = {
    comment: ''
}

export default function PostsCommentsCard() {
    const { id } = useParams()
    const [post] = useGetOnePost(id);
    const [comments, setComments] = useGetAllComments(id);
    const createComment = useCreateComment();

    async function setCommentHandler() {
        let comments = await getAllComments(id);
        setComments(oldComments => [...comments]);
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(id, comment);
            setCommentHandler();

        } catch (err) {
            console.log(err.message);
        }
    });

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-20">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 mx-4 my-4">
                        <img
                            src={post.image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-purple-500 antialiased">
                            {post.title}
                        </h1>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Description: {post.description}
                        </p>

                        <div className="details-comments">
                            <h2>Comments:</h2>
                            <ul>
                                {comments.map(comment => (
                                    <li key={comment._id} className="comment">
                                        <p>{comment.author.email}: {comment.text}</p>
                                    </li>))
                                }
                            </ul>

                        </div>

                        <label>Add new comment:</label>
                        <form className="form" onSubmit={submitHandler}>
                            <textarea
                                name="comment"
                                placeholder="Comment......"
                                onChange={changeHandler}
                                value={values.comment}
                            ></textarea>

                            <button className="btn submit"
                                type="submit"
                                value="Add Comment"
                            >
                                Post
                            </button>
                        </form>

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