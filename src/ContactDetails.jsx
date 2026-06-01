import React, { useState } from "react";
import "./ContactDetails.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
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

const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "917708647400";

  const text = `Hello Suchee,

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;

  window.open(whatsappLink, "_blank");

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section id="contact">

      <h1>Contact Me</h1>

      <p className="subtitle">
        Let’s connect and discuss opportunities
      </p>

      {/* Success Message */}
      {submitted && (
        <p className="success">
          Message sent successfully!
        </p>
      )}

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <ul className="velan">

          {/* Name */}
          <li>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </li>

          {/* Email */}
          <li>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </li>

          {/* Message */}
          <li>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </li>

          {/* Submit Button */}
          <li>
            <button type="submit">
              Send Message
            </button>
          </li>

        </ul>

      </form>

      {/* Social Icons */}
      <div className="footer">

        {/* WhatsApp */}
        <a
          href="https://wa.me/917708647400"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={30} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={30} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

      </div>

    </section>
  );
};

export default ContactDetails;