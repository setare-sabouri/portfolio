import React from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import Karma from '../../styles/fonts/Karma_Bold.json'
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

extend({ TextGeometry })
const TextMesh = () => {
    const font = new FontLoader().parse(Karma)
    return (
        <mesh>
            <textGeometry args={['Hi im Setare', { font, size: 2, height: 1 }]} />
        </mesh >
    );
};

export default TextMesh;
