import React from "react";
import { Text3D, Center, useMatcapTexture } from "@react-three/drei";

const TextGeo = () => {
    const [matCapTexture] = useMatcapTexture('9F1A27_F1AF7F_CD5845_D08441', 256)
    //8A6565_2E214D_D48A5F_ADA59C   9E7C7E_DDCBD0_351D20_683B38


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
                    <meshMatcapMaterial matcap={matCapTexture} />
                </Text3D>
            </Center>
        </>
    )
};

export default TextGeo;
