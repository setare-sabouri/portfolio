import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TextMesh from './TextMesh';
import './ThreeText.scss';


export const ThreeText = () => {

    return (
        <Canvas>
            <OrbitControls enableDamping />
            <Suspense fallback={null}>
                <TextMesh />

            </Suspense>
        </Canvas>

    );
};
