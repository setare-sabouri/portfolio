import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const buttonRef = useRef();
    const buttonGLTF = useLoader(GLTFLoader, '/button/scene.gltf');
    const { nodes, materials } = useGLTF('/button/scene.gltf');


    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate('/main');
    };



    return (
        <group ref={buttonRef} onClick={handleClick} dispose={null} position={[0, -2, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Base']} />
            <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Button']} />
        </group>

    );
};
useGLTF.preload('/button/scene.gltf')


export default Button;
