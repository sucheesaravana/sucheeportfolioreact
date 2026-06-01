// import React from "react";
// import './About.css';
// import logo from './assets/sucheeimage1.jpeg';

// const About = () => {
//   return (
//     <section id="about">
//         <div className="about-content">
//             <div><img src={logo} /></div>
            
//             <div>
//             <h2 className="heading">About <span>Me</span></h2>
//             <h1>I'm a <br /><span>Full Stack Developer</span> & <span>Home Tutor</span></h1>
//             <p>I craft clean, responsive web experiences and love turning ideas into interactive interfaces.</p>
//             <p>Beyond coding, I teach Mathematics, Physics, and Computer Science to students (Grades 6–12), focusing on clarity and strong fundamentals.</p>
//             </div>
//         </div>

        
//     </section>
//   );
// };



// export default About;



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
//             I am passionate about building modern, responsive, and user-friendly
//             web applications. My focus is on creating clean designs and writing
//             efficient code that delivers a seamless user experience.
//           </p>

//           <p>
//             As a Full Stack Developer, I work with technologies such as HTML,
//             CSS, JavaScript, React.js, Python, Django, MySQL, and REST APIs. I
//             enjoy transforming ideas into functional applications and constantly
//             exploring new technologies to improve my skills.
//           </p>

//           <p>
//             Alongside development, I work as a Home Tutor, teaching Mathematics,
//             Physics, and Computer Science for students from Grades 6–12. I
//             believe in making complex concepts simple and helping students build
//             confidence through strong fundamentals and practical learning.
//           </p>

//           <p>
//             My goal is to combine technical expertise with creativity to develop
//             impactful digital solutions while also inspiring students to achieve
//             academic success.
//           </p>

//           <p>
//             I enjoy learning new technologies,
//             solving programming challenges, and working on personal projects
//             that enhance my problem-solving and development skills.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div>
          <h2 className="heading">
            About <span>Me</span>
          </h2>

          <h1>
            I'm a <span>Full Stack Developer</span> &
            <span> Home Tutor</span>
          </h1>

          <p>
            Passionate about building responsive web applications and helping
            students achieve academic excellence through effective teaching.
          </p>

          <ul className="about-list">
            <li>💻 Develop modern web applications using React.js and Django.</li>
            <li>🎨 Create clean, responsive, and user-friendly interfaces.</li>
            <li>🗄️ Work with MySQL databases and REST APIs.</li>
            <li>📚 Teach Mathematics, Physics, and Computer Science (Grades 6–12).</li>
            <li>🚀 Continuously learning new technologies and best practices.</li>
            <li>🧩 Strong interest in problem-solving and software development.</li>
            <li>🤝 Dedicated to delivering quality solutions and positive learning experiences.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;