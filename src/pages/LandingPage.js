// src/pages/LandingPage.js
import React, { Suspense } from 'react';
import { Intro } from '../components/Intro/Intro';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Loading from '../components/Loading/Loading';
function LandingPage() {

    return (
        <Canvas >
            <Suspense fallback={Loading}>
                <OrbitControls />
                <Environment preset="city" />
                <Intro />
            </Suspense>
        </Canvas>

    );
}

export default LandingPage;
