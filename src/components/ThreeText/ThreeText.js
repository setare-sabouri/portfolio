import React from 'react'
import "./ThreeText.scss"
import { useNavigate } from 'react-router-dom';

export const ThreeText = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main');
    };
    return (
        <>
            <canvas class="webgl"></canvas>
            <button onClick={handleClick}>Enter Site</button>
        </>
    )
}
