// src/pages/LandingPage.js
import React from 'react';
import { IntroText } from '../components/IntroText/IntroText';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    const handleDoubleClick = () => {
        navigate('/main');
    };
    return (
        <div onDoubleClick={handleDoubleClick}>
            <IntroText />
        </div>
    );
}

export default LandingPage;
