import React from "react";
import { Text3D } from "@react-three/drei";
import { useTextMatCap } from "../hooks/useMatcapMaterial";
import { Center } from '@react-three/drei';

const TextGeo = () => {

    const material = useTextMatCap()
    return (
        <Center>
            <Text3D
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
