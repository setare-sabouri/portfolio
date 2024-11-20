import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TextMesh from './TextMesh';
import './IntroText.scss';


export const IntroText = () => {

    return (
        <Canvas>
            <OrbitControls enableDamping />
            <Suspense fallback={null}>
                <TextMesh />
                <axesHelper />
            </Suspense>
        </Canvas>

    );
};
