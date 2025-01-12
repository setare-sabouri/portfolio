import React, { useRef } from "react";
import { Text3D } from "@react-three/drei";
import { useTextMatCap } from "../../hooks/useMatcapMaterial";
import { Center } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

const TextGeo = () => {
    const text = useRef()
    const timeRef = useRef(0);
    const material = useTextMatCap()

    useFrame((state, delta) => {
        timeRef.current += delta;
        text.current.position.y = Math.sin(timeRef.current * 1) * 0.3;

    })

    return (
        <Center>
            <Text3D
                ref={text}
                material={material}
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.85}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                Hi, i'm Setare
            </Text3D>
        </Center>
    )
};

export default TextGeo;
