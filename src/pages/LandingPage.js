// src/pages/LandingPage.js
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
}

export default LandingPage;
