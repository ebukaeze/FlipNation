import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGem } from 'react-icons/fa';
import { FaUser, FaBars, FaTimes, FaHome, FaBlog, FaPhone, FaPowerOff } from 'react-icons/fa';

const navlinks = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },

    {
        title: 'Blog',
        path: '/blog',
        icon: <FaBlog />
    },

    {
        title: 'Contact Us',
        path: '/contact-us',
        icon: <FaPhone />
    }, 
    
    {
        title: 'Sign Up',
        path: '/sign-up',
        icon: <FaPowerOff />
    }

]
function Navbar({user}){

    const [click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenuButton = () => setClick(false);

    return(
        <nav className="navbar">
            <div className="navbar-container container2">
                <Link to="/" className="navbar-logo" onClick={closeMenuButton}>
                <FaGem  className="navbar-icon"/>
                FlipNation
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                { click ? <FaTimes /> : <FaBars /> }
                </div>

                <div className={click ? "menu-content-container active" : "menu-content-container"}>

            
            <ul className="nav-list">
                { navlinks.map((link, index) => (
                    <li key={ index } className="nav-item">
                        <Link to={link.path} className="nav-links" onClick={closeMenuButton}>
                           <span className="item-icon"> {link.icon} </span>
                            {link.title}</Link>
                    </li>
                ))}
            </ul>
            <span>
            <Link to="/" className="user-section" onClick={closeMenuButton}>
             <FaUser className="user-avatar" />
              {`${user.firstname} ${user.lastname}`} 
             </Link>
             </span>
            
                </div>
            </div>

        </nav>
    )
}
export default Navbar;