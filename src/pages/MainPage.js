// src/pages/MainPage.js
import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { About } from '../components/main/about';
import { Skills } from '../components/skills/skills';
import { Projects } from '../components/Projects/Projects';

function MainPage() {
    return (
        <div className="container-fluid h-100">
            <Navbar />
            <div className="about">
                <About />
            </div>
            <Projects />
            <Skills />
        </div>
    );
}

export default MainPage;
