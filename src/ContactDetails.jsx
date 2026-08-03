import React, { useState } from "react";
import "./ContactDetails.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917708647400";

    const text = `Hello Suchee,

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappLink, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h1>
            Contact <span>Me</span>
          </h1>

          <p className="subtitle">
            I'm always open to discussing new opportunities, freelance
            projects, or collaborations. Feel free to reach out!
          </p>

          <div className="contact-info">
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <span>sucheeezhil@gmail.com</span>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <span>+91 7708647400</span>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          <div className="footer">
            <a
              href="https://wa.me/917708647400"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={28} />
            </a>

            
            {/* Replace with your profile */}
            <a
              href="https://www.linkedin.com/in/suchee-devi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          {submitted && (
            <p className="success">
              ✅ Thanks for reaching out! Your message has been sent
              successfully.
            </p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;