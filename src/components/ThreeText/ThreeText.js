import React from 'react'
import "./ThreeText.css"
import { useNavigate } from 'react-router-dom';

export const ThreeText = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main'); // Redirect to the main page
    };
    return (
        <>


            <canvas class="webgl">

            </canvas>
            <button onClick={handleClick}>Enter Site</button>
        </>
    )
}
