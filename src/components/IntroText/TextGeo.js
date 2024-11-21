import React, { useRef, useEffect, useMemo } from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import Karma from "../../fonts/Lacquer.json";
import useTextPropsStore from "../../utils/store";

extend({ TextGeometry });

const TextGeo = ({ position = [-3, 2, 0] }) => {
    const meshRef = useRef();
    const { textProps } = useTextPropsStore();

    const font = useMemo(() => new FontLoader().parse(Karma), []);

    useEffect(() => {
        if (meshRef.current) {
            const geometry = new TextGeometry(textProps.message, {
                font,
                size: textProps.size,
                depth: textProps.depth,
            });

            // Dispose old geometry to avoid memory leaks
            meshRef.current.geometry?.dispose();
            meshRef.current.geometry = geometry;

            meshRef.current.material.color.set(textProps.color);
        }
    }, [textProps]);

    return <mesh ref={meshRef} position={position} />;
};

export default TextGeo;
