// src/pages/LandingPage.js
import React, { Suspense } from 'react';
import { Intro } from '../components/Landing page/Intro/Intro';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Loading from '../components/Landing page/Loading/Loading';
function LandingPage() {

    return (
        <Suspense fallback={<Loading />}>
            <Canvas >
                <OrbitControls />
                <Environment preset="city" />
                <Intro />
            </Canvas>
        </Suspense>


    );
}

export default LandingPage;
