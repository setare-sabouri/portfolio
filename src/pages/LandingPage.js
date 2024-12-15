// src/pages/LandingPage.js
<<<<<<< HEAD
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
=======
import React, { Suspense } from "react";
import { IntroText } from "../components/IntroText/IntroText";
import Button from "../models/Button";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

function LandingPage() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Environment preset="sunset" background />
        <IntroText />
        <Button />
      </Suspense>
    </Canvas>
  );
>>>>>>> 69fa9e9f04cd4582a03e062d263d8c3d1b296e47
}

export default LandingPage;
