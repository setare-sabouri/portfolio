// src/pages/LandingPage.js
import React, { Suspense } from 'react';
import { IntroText } from '../components/IntroText/IntroText';
import Button from '../models/Button';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function LandingPage() {
    const navigate = useNavigate();
    const handleDoubleClick = () => {
        navigate('/main');
    };
    return (
        <Canvas onDoubleClick={handleDoubleClick}>
            <Suspense fallback={null}>
                <Environment preset="sunset" background />
                <IntroText />
                <Button />
            </Suspense>
        </Canvas>

    );
}

export default LandingPage;
