// import React from "react";
// import './ContactDetails.css';
// import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const ContactDetails =()=>{
//     return (
//         <section id="contact">
//             <h1>Contact Me</h1>
//             <p className="subtitle">
//              Please fill out the form below to discuss any work opportunities
//             </p>

//         <form className="contact-form">
//           <ul className="velan">
//             <li><input type="text" placeholder="Your Name" required /></li>
//             <li><input type="email" placeholder="Your Email" required /></li>
//             <li><textarea placeholder="Your Message" rows="5" required></textarea></li>
//             <li><button type="submit">Submit</button></li>
//           </ul>
//         </form>

        
//       <p className="footer">
//        <a href="https://web.whatsapp.com/"> <FaWhatsapp size={30} /></a>
//        <a href="https://www.instagram.com/?hl=en"><FaInstagram size={30}/> </a>
//        <a href="https://www.facebook.com/"><FaFacebook size={30}/></a>
//        <a href="https://www.linkedin.com/uas/login"><FaLinkedin size={30}/></a>
//       </p>
//     </section>
//   );
// };
    

// export default ContactDetails;



import React, { useState } from "react";
import "./ContactDetails.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <p className="subtitle">
        Let’s connect and discuss opportunities
      </p>

      {submitted && (
        <p className="success">Message sent successfully!</p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <ul className="velan">
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

          <li>
            <button type="submit">Send Message</button>
          </li>
        </ul>
      </form>

      <div className="footer">
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <FaWhatsapp size={30} />
        </a>

        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook size={30} />
        </a>

        <a href="https://www.linkedin.com/uas/login" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default ContactDetails;