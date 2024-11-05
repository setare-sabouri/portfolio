import React from 'react'
import "./main.css"
import "./mq.css"
export const About = () => {
    return (
        <main >
            <div class="image-wrapper col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <img
                    class="img-fluid"
                    src="./images/setarebw.jpg"
                    alt="photo of setare"
                />
            </div>
            <div class="info-wrapper col-sm-6 col-md-6 col-lg-6 col-xl-6 px-4">
                <div className="right-head image-blur"></div>
                <div className='right-head content-on-blur'>
                    <h1 >Hi, i'm Setare</h1>
                    <p class="">
                        I love to create, learn, develop, and teach continuously,<br />
                        I'm curious about exploring the connection between my interests and the world around me,<br />
                        When I'm not coding, you can usually find me painting, making art, hiking, biking, or learning new fields !
                    </p>
                </div>

            </div >
        </main >
    )
}
