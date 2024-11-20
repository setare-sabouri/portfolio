import React, { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import Karma from '../../fonts/Space.json'
import useTextPropsStore from "../../utils/store";

extend({ TextGeometry }) //to get the textgeometry to compile

const TextGeo = () => {
    const font = new FontLoader().parse(Karma);
    const meshRef = useRef();

    const { textProps } = useTextPropsStore()
    useFrame(() => {

        if (meshRef.current) {
            meshRef.current.geometry.dispose(); // Clean up old geometry
            meshRef.current.geometry = new TextGeometry(
                textProps.message,
                {
                    font,
                    size: textProps.size,
                    depth: textProps.depth
                }
            );
            meshRef.current.material.color.set(textProps.color);

        }
    });

    return (
        <mesh ref={meshRef} position={[-3, 2, 0]} />
    );
};

export default TextGeo;
