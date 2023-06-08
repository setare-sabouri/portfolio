import React from 'react'
import "./main.css"
export const About = () => {
    return (
        <main class="row align-items-center justify-content-between">
            <div class="info-wrapper col-sm-12 col-md-6 col-lg-6 col-xl-6 px-4">
                <h1 class="">Hi, i'm Setare</h1>
                <p class="">
                    I love to create, learn, develop, and teach continuously,<br />
                    I'm curious about exploring the connection between my interests and the world around me,<br />
                    When I'm not coding, you can usually find me painting, making art, hiking, biking, or learning new fields !
                </p>
            </div >
            <div class="image-wrapper col-sm-10 col-md-6 col-lg-6 col-xl-6">
                <img
                    class="img-fluid mb-5"
                    width="400"
                    height="400"
                    src="./images/setare-Image.jpg"
                    alt="photo of setare"
                />
            </div>
        </main >)
}
