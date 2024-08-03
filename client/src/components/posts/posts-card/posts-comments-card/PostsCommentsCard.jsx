import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOnePost } from "../../../../hooks/usePosts";
import { useForm } from "../../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../../hooks/useComments";
import { getAllComments } from "../../../../api/comments-api";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { deletePosts } from "../../../../api/posts-api";


const initialValues = {
    comment: ''
}

export default function PostsCommentsCard() {
    const { postId } = useParams()
    const [post] = useGetOnePost(postId);
    const navigate = useNavigate();
    const [comments, setComments] = useGetAllComments(postId);
    const { userId, isAutenticated } = useAuthContext();
    const createComment = useCreateComment();

    async function setCommentHandler() {
        let comments = await getAllComments(postId);
        setComments(oldComments => [...comments]);
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(postId, comment);
            setCommentHandler();

        } catch (err) {
            console.log(err.message);
        }
    });

    const isOwner = userId === post._ownerId;

    const postDeleteHandler = async () => {
        try {
            await deletePosts(postId);
            navigate('/posts')

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-black shadow-md mx-20">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-black mx-4 my-4">
                        <img
                            src={post.image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-indigo-600 antialiased">
                            {post.title}
                        </h1>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                            Description: {post.description}
                        </p>

                        {isOwner && (
                            <div className="my-5">
                                <Link to={`/edit/${post._id}`} className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-3">
                                    Edit post
                                </Link>
                                <Link to={`/delete/${post._id}`} onClick={postDeleteHandler} className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-3">
                                    Delete post
                                </Link>
                            </div>

                            //flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                        )}
                        <h2>Comments:</h2>
                        <div className="border-solid border-4 border-indigo-600 rounded-md px-2 py-2">

                            <ul>
                                {comments.map(comment => (
                                    <li key={comment._id} className="comment">
                                        <p>{comment.author.email}: {comment.text}</p>
                                    </li>))
                                }
                                {comments.length == 0 && <p>No comments yet.</p>}
                            </ul>

                        </div>

                        {isAutenticated && (
                            <div className="my-10">
                                <label>Add new comment:</label>
                                <form className="border-solid border-4 border-indigo-600 rounded-md px-2 py-2" onSubmit={submitHandler}>
                                    <textarea
                                        className="w-full"
                                        name="comment"
                                        placeholder="Comment......"
                                        onChange={changeHandler}
                                        value={values.comment}
                                    ></textarea>

                                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-1 my-3"
                                        type="submit"
                                        value="Add Comment"
                                    >
                                        Post new comment
                                    </button>
                                </form>
                            </div>
                        )}
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