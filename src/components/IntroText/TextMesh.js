import React, { useRef, useEffect } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import Karma from '../../fonts/Karma_Bold.json'
import { textProps } from "../GUI/GUI";


extend({ TextGeometry })

const TextMesh = () => {
    const font = new FontLoader().parse(Karma);
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.geometry.dispose(); // Clean up old geometry
            meshRef.current.geometry = new TextGeometry(
                textProps.message,
                { font, size: textProps.size, height: textProps.height }
            );
            meshRef.current.material.color.set(textProps.color);

        }
    });

    return (
        <mesh ref={meshRef} position={[-9, 0, 0]} />
    );
};

export default TextMesh;
