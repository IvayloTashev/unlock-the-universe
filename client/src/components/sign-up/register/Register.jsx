import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";

const initialValues = {
    email: '',
    password: '',
    rePass: ''
}

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [isError, setIsError] = useState(false);

    const registerHandler = async ({ email, password, rePass }) => {

        if (password != rePass) {
            setError("Password don\'t match");
            setIsError(true);
            return;
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setIsError(true);
            return;
        }
    }

    const { changeHandler, submitHandler, values } = useForm(initialValues, registerHandler)

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={changeHandler}
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                                Password
                            </label>
                            <div className="text-sm">
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={changeHandler}
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="rePass" className="block text-lg font-medium leading-6 text-white">
                                Repeat Password
                            </label>
                            <div className="text-sm">
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="rePass"
                                name="rePass"
                                value={values.rePass}
                                onChange={changeHandler}
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-white text-lg">
                    Already have an account?{' '}
                    <Link to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl">
                        Sing In
                    </Link>
                </p>
            </div>
            {isError && (
                <p className="block text-lg text-center font-medium leading-6 text-white mt-10 decoration-rose-500 ">
                    {error}
                </p>
            )}
        </div>
    )
}