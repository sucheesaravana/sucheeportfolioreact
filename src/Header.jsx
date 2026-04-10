import React from "react";
import './Headernew.css';
import logo from './assets/sucheeimage2.jpeg';
import myPDF from './assets/SucheeupdateCV.pdf';
import ContactDetails from "./ContactDetails";

const Header = () => {
    return (
        <><nav>
            <div className="header">
                <h1 className="name">Suchee Devi</h1>
                <ul>
                    <li><a href="#home">Home </a></li>
                    <li><a href="#about">About </a></li>
                    <li><a href="#skills">skills </a></li>
                    <li><a href="#contact">Contact </a></li>
                </ul>
            </div></nav>
            <section className="section">
                <div className="section-container">
                    <div className="content">
                        <p className="subtitle1">Hello!</p>
                        <h1 className="title">I'm <span>Suchee</span> Python Full Stack Trainee</h1>
                        <p className="description">Welcome to my Portfolio</p>
                        <p className="active-buttons">
                        <a href="#contact" className="hirebutton">Hire Me</a>
                        <a href="SucheeupdateCV.pdf" download>
                        <button className="cvbutton" >Download CV</button></a></p>
                    </div>

                    <div className="Image"><img src={logo}></img>
                    </div>
                </div>  
            </section>
        </>
    )
}
export default Header