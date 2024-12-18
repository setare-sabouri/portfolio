import React from "react";
import { Text3D } from "@react-three/drei";
import { useTextMatCap } from "../hooks/useMatcapMaterial";
const TextGeo = () => {

    const material = useTextMatCap()
    return (
        <>
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
        </>
    )
};

export default TextGeo;
