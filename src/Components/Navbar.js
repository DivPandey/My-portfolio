import React, { useState } from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import Div_logo from '../Assets/Div_logo.png';

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
        <nav className="navbar">
            <div id="navbar-logo">
                <img src={Div_logo} className="logo" alt="Divyanshu" />
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
    );
}

export default Navbar;
