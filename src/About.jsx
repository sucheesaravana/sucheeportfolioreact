import React from "react";
import './About.css';
import logo from './assets/sucheeimage1.jpeg';

const About = () => {
  return (
    <section className="about">
        <div className="about-content">
            <div><img src={logo} /></div>
            
            <div>
            <h2 className="heading">About <span>Me</span></h2>
            <h1>I'm a <br /><span>Frontend Developer</span> & <span>Home Tutor</span></h1>
            <p>I build responsive and user-friendly web interfaces using modern
               technologies.</p>
            <p>I am a dedicated and enthusiastic individual with a strong interest in both learning and teaching. Along with my academic pursuits, I conduct tuition classes for students in Mathematics, Physics and Computer Science (Grades 6–12).<br /><br /><br />
                I am passionate about sharing knowledge and making learning an engaging and enjoyable experience.</p>
            </div>
        </div>

        
    </section>
  );
};



export default About;