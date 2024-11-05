import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box';
import './ThreeText.scss';


export const ThreeText = () => {

    return (
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}  >
            <OrbitControls enableDamping />
            <Box />
        </Canvas>
    );
};
