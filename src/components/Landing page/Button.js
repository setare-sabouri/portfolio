import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";

const Button = () => {
    const { nodes, materials } = useGLTF('/button/scene.gltf');
    const buttonTop = useRef()

    const navigate = useNavigate();
    const handleClick = (e) => {
        gsap.to(buttonTop.current.position, {
            y: "-=0.2",
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
            onComplete: () => navigate('/main')

        })
    };


    return (
        <group onClick={handleClick} dispose={null} position={[0, -2, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Base']} />
            <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Button']} ref={buttonTop} />
        </group>

    );
};
useGLTF.preload('/button/scene.gltf')


export default Button;
