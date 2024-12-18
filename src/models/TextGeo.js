import React from "react";
import { Text3D, Center } from "@react-three/drei";
import { useTextMatCap } from "../Utils/hooks/useMatcap";


const TextGeo = () => {

    return (
        <>
            <Center>
                <Text3D
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
                    <meshMatcapMaterial matcap={useTextMatCap()[0]} />

                </Text3D>
            </Center>
        </>
    )
};

export default TextGeo;
