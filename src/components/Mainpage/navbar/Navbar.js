import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/main" className="navbar-title">Setareh Sabouri</Link>
            <div className="navbar-links">
                <a href="mailto:setarehsaboory@gmail.com" aria-label="Email">
                    <i className="fa fa-envelope fa-2x fa_custom"></i>
                </a>
                <a href="https://github.com/setare-sabouri" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github fa-2x fa_custom"></i>
                </a>
                <a href="https://www.linkedin.com/in/setareh-sabouri-8024a922b" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin fa-2x fa_custom"></i>
                </a>
                <a href="https://www.behance.net/setarehsaboor" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-behance fa-2x fa_custom"></i>
                </a>
            </div>
        </nav>
    );
};
