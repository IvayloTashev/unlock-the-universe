import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./Navbar.css";

export default function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const menuClickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>

                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fa-solid fa-earth-americas" />
                    </Link>
                    <div className='menu-icon' onClick={menuClickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                                Explore
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/create' className='nav-links' onClick={closeMobileMenu}>
                                Create
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/picture-of-the-day' className='nav-links' onClick={closeMobileMenu}>
                                Picture of the Day
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    );
}

