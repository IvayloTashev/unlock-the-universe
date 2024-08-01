import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {

    const { isAutenticated } = useAuthContext()

    return (
        <nav className="navbar">
            <div className='navbar-container'>

                <Link to='/' className='navbar-logo'>
                    <i className="fa-solid fa-earth-americas" />
                </Link>

                <ul className='nav-menu'>

                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/explore' className='nav-links' >
                            Explore
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/picture-of-the-day' className='nav-links' >
                            Picture of the Day
                        </Link>
                    </li>

                    {isAutenticated
                        ? (
                            <>
                                <li className='nav-item'>
                                    <Link to='/posts' className='nav-links' >
                                        Posts
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to='/logout' className='nav-links' >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )
                        : (
                            <li>
                                <Link to='/sign-up' className='nav-links' >
                                    Sign Up
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}