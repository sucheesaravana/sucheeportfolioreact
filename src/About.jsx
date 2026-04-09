import React from "react";
import './About.css';
import logo from './assets/sucheeimage1.jpeg';

const About = () => {
  return (
    <section id="about">
        <div className="about-content">
            <div><img src={logo} /></div>
            
            <div>
            <h2 className="heading">About <span>Me</span></h2>
            <h1>I'm a <br /><span>Frontend Developer</span> & <span>Home Tutor</span></h1>
            <p>I craft clean, responsive web experiences and love turning ideas into interactive interfaces.</p>
            <p>Beyond coding, I teach Mathematics, Physics, and Computer Science to students (Grades 6–12), focusing on clarity and strong fundamentals.</p>
            </div>
        </div>

        
    </section>
  );
};



export default About;