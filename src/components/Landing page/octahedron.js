import { useRef } from "react";
import { useTextMatCap } from "../../hooks/useMatcapMaterial";
import { CreatDiamondGeometry } from "../../Utils/CreatDiamondGeometry";
import { useFrame } from '@react-three/fiber';

const Octahedron = ({ count }) => {
    const material = useTextMatCap()
    const Geometry = CreatDiamondGeometry();
    const diamonds = useRef([]) // diamonds.currrent is a empty array

    useFrame((state, delta) => {
        for (const diamond of diamonds.current) {
            diamond.rotation.y += delta * 0.3;
        }
    });

    return (
        <>

            {[...Array(count)].map((_, index) => (
                <mesh
                    ref={(thisMesh) => (diamonds.current[index] = thisMesh)}
                    key={index}
                    geometry={Geometry}
                    material={material}
                    position={[
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.50) * 15,
                    ]}
                    scale={0.1 + Math.random() * 0.5}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0,
                    ]}
                />


            ))}

        </>

    )
}


export default Octahedron;
