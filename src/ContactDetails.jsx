import React from "react";
import './ContactDetails.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactDetails =()=>{
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p className="subtitle">
             Please fill out the form below to discuss any work opportunities
            </p>

        <form className="contact-form">
          <ul className="velan">
            <li><input type="text" placeholder="Your Name" required /></li>
            <li><input type="email" placeholder="Your Email" required /></li>
            <li><textarea placeholder="Your Message" rows="5" required></textarea></li>
            <li><button type="submit">Submit</button></li>
          </ul>
        </form>

        
      <p className="footer">
       <a href="https://web.whatsapp.com/"> <FaWhatsapp size={30} /></a>
       <a href="https://www.instagram.com/?hl=en"><FaInstagram size={30}/> </a>
       <a href="https://www.facebook.com/"><FaFacebook size={30}/></a>
       <a href="https://www.linkedin.com/uas/login"><FaLinkedin size={30}/></a>
      </p>
    </section>
  );
};
    

export default ContactDetails;