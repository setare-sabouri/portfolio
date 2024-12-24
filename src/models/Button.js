import { useGLTF } from "@react-three/drei";
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Button = () => {
    const { nodes, materials } = useGLTF('/button/scene.gltf');


    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate('/main');
    };

    return (
        <group onClick={handleClick} dispose={null} position={[0, -2, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Base']} />
            <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Button']} />
        </group>

    );
};
useGLTF.preload('/button/scene.gltf')


export default Button;
