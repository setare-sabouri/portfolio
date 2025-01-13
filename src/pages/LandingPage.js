// src/pages/LandingPage.js
import React, { Suspense } from 'react';
import { Intro } from '../components/Landing page/Intro/Intro';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Loading from '../components/Landing page/Loading/Loading';
import { useMediaQuery } from 'react-responsive';

function LandingPage() {
    // Detect if the screen width is less than or equal to 768px (mobile)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Suspense fallback={<Loading />}>
            <Canvas
                camera={{
                    position: isMobile ? [0, 0, 12] : [0, 0.5, 10],  // Zoom out on mobile
                    fov: isMobile ? 80 : 60,                    // Wider view on mobile
                }}
            >
                <OrbitControls
                    maxDistance={30}
                />

                <Environment preset="city" />
                <Intro />
            </Canvas>
        </Suspense>
    );
}

export default LandingPage;
