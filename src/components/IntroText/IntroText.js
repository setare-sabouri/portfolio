import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TextGeo from './TextGeo.js';
import './IntroText.scss';
import "../../utils/GUI.js"


export const IntroText = () => {

    return (
        <Canvas>
            <OrbitControls enableDamping />
            <Suspense fallback={null}>
                <TextGeo />
                <axesHelper />
            </Suspense>
        </Canvas>

    );
};
