import React, { useState } from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import Div_logo from '../Assets/Div_logo.png';
import HeadRoom from "react-headroom";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
];

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState(null);

    const changeLink = (link) => {
        setSelectedLink(link);
    }

    return (
        <HeadRoom>
        <nav className="navbar">
            
            <div className='updated_logo'>
            
            <span className="updated_logo-name">Divyanshu Pandey</span>
            
            </div>
            <ul className="navbar-links">
                {navLinks.map((link) => (
                    <NavItem
                        selectedLink={selectedLink}
                        changeLink={changeLink}
                        key={link.name}
                        name={link.name}
                        href={link.href}
                    >
                        {link.name}
                    </NavItem>
                ))}
            </ul>
        </nav>
        </HeadRoom>
    );
}

export default Navbar;
