// src/pages/LandingPage.js
import React from 'react';
import { ThreeText } from '../components/ThreeText/ThreeText';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    const handleDoubleClick = () => {
        navigate('/main');
    };
    //pass text later from here as prop
    return (
        <div onDoubleClick={handleDoubleClick}>
            <ThreeText />
        </div>
    );
}

export default LandingPage;
