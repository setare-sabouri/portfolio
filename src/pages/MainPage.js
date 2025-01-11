// src/pages/MainPage.js
import React from 'react';
import { Navbar } from '../components/Mainpage/navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
function MainPage() {


    return (
        <div className="container-fluid h-100">
            <Navbar />
            <Link to="projects">projects</Link>
            <Link to="skills">skills</Link>
            <Link to="resume">Resume</Link >
            <Outlet />
        </div>
    );
}

export default MainPage;
