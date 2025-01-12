import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/main" style={{ textDecoration: 'none' }}>
                <h1>Setareh Sabouri</h1>
            </Link>


            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className='navbar-nav mr-auto '>
                    <li className='nav-item active'>
                        <a className="nav-link" href="mailto:setarehsaboory@gmail.com"><i className="fa fa-envelope fa-2x fa_custom"></i></a>
                    </li>
                    <li className='nav-item active'>
                        <a className="nav-link" href="https://github.com/setare-sabouri"><i
                            className="fa fa-github fa-2x fa_custom"></i></a>
                    </li>
                    <li className='nav-item active'>
                        <a className="nav-link"
                            href="https://www.linkedin.com/in/setareh-sabouri-8024a922b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoixKA3oHSJyCFXEGTA7rUA%3D%3D"><i
                                className="fa fa-linkedin fa-2x fa_custom"></i></a>
                    </li>
                    <li className='nav-item active'>
                        <a className="nav-link" href="https://www.behance.net/setarehsaboor"><i
                            className="fa fa-behance fa-2x fa_custom"></i></a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
