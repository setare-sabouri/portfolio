import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import TextGeo from '../../models/TextGeo.js';
import './IntroText.scss';
import "../../utils/GUI.js"

export const IntroText = () => {

    return (
        <>
            <OrbitControls enableDamping />
            <Suspense fallback={null}>
                <TextGeo />
            </Suspense>
        </>

    );
};
