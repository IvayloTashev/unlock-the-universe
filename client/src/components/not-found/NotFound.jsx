import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-900 rounded-md space-y-6">

                <label className="block text-2xl font-medium leading-6 text-white text-center">
                    4 0 4
                </label>


                <label htmlFor="password" className="block text-2xl font-medium leading-6 text-white text-center">
                    Page not found.
                </label>

                <div>
                    <Link to={'/'}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}



