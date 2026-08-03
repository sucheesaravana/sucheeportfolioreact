// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="about-content">
//         <div>
//           <h2 className="heading">
//             About <span>Me</span>
//           </h2>

//           <h1>
//             I'm a <span>Full Stack Developer</span> &
//             <span> Home Tutor</span>
//           </h1>

//           <p>
//             Passionate about building responsive web applications and helping
//             students achieve academic excellence through effective teaching.
//           </p>

//           <ul className="about-list">
//             <li>💻 Develop modern web applications using React.js and Django.</li>
//             <li>🎨 Create clean, responsive, and user-friendly interfaces.</li>
//             <li>🗄️ Work with MySQL databases and REST APIs.</li>
//             <li>📚 Teach Mathematics, Physics, and Computer Science (Grades 6–12).</li>
//             <li>🚀 Continuously learning new technologies and best practices.</li>
//             <li>🧩 Strong interest in problem-solving and software development.</li>
//             <li>🤝 Dedicated to delivering quality solutions and positive learning experiences.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import "./About.css";
import {
  FaLaptopCode,
  FaReact,
  FaDatabase,
  FaChalkboardTeacher,
  FaLightbulb,
  FaHandshake,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">

          <h2 className="heading">
            About <span>Me</span>
          </h2>

          <h1>
            I'm <span>S. Suchee Devi</span>
          </h1>

          <h3>
            Full Stack Developer | React Developer | Django Developer | Home Tutor
          </h3>

          <p>
            I'm a passionate Full Stack Developer with experience in building
            responsive and user-friendly web applications using React.js,
            Django, MySQL, and REST APIs. I enjoy transforming ideas into
            functional digital solutions with clean and efficient code.
          </p>

          <p>
            Along with software development, I work as a Home Tutor, helping
            students from Grades 6–12 improve their understanding of
            Mathematics, Physics, and Computer Science through practical and
            engaging learning methods.
          </p>

          <ul className="about-list">

            <li>
              <FaLaptopCode className="icon" />
              Develop responsive web applications using React.js & Django.
            </li>

            <li>
              <FaReact className="icon" />
              Build modern, interactive, and mobile-friendly user interfaces.
            </li>

            <li>
              <FaDatabase className="icon" />
              Design and manage MySQL databases with REST API integration.
            </li>

            <li>
              <FaCode className="icon" />
              Strong knowledge of HTML, CSS, JavaScript, Python, Bootstrap, and Git.
            </li>

            <li>
              <FaChalkboardTeacher className="icon" />
              Home Tutor for Mathematics, Physics & Computer Science (Grades 6–12).
            </li>

            <li>
              <FaGraduationCap className="icon" />
              Explain concepts in a simple and practical way for better learning.
            </li>

            <li>
              <FaLightbulb className="icon" />
              Passionate about problem-solving, learning new technologies, and
              improving coding skills.
            </li>

            <li>
              <FaHandshake className="icon" />
              Dedicated, hardworking, quick learner, and committed to delivering
              high-quality solutions.
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default About;