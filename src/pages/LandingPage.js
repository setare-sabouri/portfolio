// src/pages/LandingPage.js
import React, { Suspense } from 'react';
import { Intro } from '../components/Intro/Intro';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function LandingPage() {

    return (
        <Canvas >
            <Suspense fallback={null}>
                <Environment preset="city" background />
                <Intro />
            </Suspense>
        </Canvas>

    );
}

export default LandingPage;
