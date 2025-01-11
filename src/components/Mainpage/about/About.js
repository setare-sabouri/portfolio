import React from 'react';
import './About.scss';

export const About = () => {
    return (
        <main className="about">
            <div className="image-wrapper">
                <img
                    className="img-fluid"
                    src="./images/setarebw.jpg"
                    alt="photo of setare"
                />
            </div>
            <div className="info-wrapper">
                <div className="right-head image-blur"></div>
                <div className="right-head content-on-blur">
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                        Currently under development, <br />
                        this space reflects my journey as a front-end developer, where
                        creativity and learning go hand in hand.<br />
                        I’m passionate about crafting engaging and intuitive user
                        experiences, and I take pride in sharing the knowledge I’ve gained
                        along the way.
                        <br />
                        I’m always curious about the intersection of technology and my
                        personal interests, which inspires me to think outside the box.<br />
                        Front-end development allows me to bring ideas to life through
                        design and functionality, and it’s truly what I love doing.
                        <br />
                        When I’m not coding, you’ll often find me painting, exploring art,
                        hiking, biking, or discovering fun new life hacks.<br />
                        Creativity fuels everything I do — whether it’s on a canvas or in
                        code.
                    </p>
                </div>
            </div>
        </main>
    );
};
