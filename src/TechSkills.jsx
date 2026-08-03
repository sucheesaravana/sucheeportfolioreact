// import React from "react";
// import './TechSkills.css';
// import { useState, useEffect } from "react";

// const skillsData = [
//   { name: "HTML", level: 80 },
//   { name: "CSS", level: 85 },
//   { name: "JavaScript", level: 75 },
//   { name: "React", level: 75 },
//   { name: "Python", level: 70 },
//   { name: "SQL", level: 80 },
//   { name: "Django", level: 70 },
//   { name: "BootStrap", level: 65 },
//   { name: "Tailwind", level: 70 },
// ];

// const TechSkills = () => {
//   const [progress, setProgress] = useState(
//     skillsData.map(() => 0)
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setProgress(skillsData.map(skill => skill.level));
//     }, 400);

//     return () => clearTimeout(timer);
//   }, []);
// return (
//     <section id="skills">
//       <h2 className="subtitle11">TECHNICAL SKILLS</h2>
//         <div className="technical">
//            {skillsData.map((skill, index) => (
//             <div className="skill" key={skill.name}>
              
//               <div className="skill-header">
//                 <span>{skill.name}</span>
//                 <span>{progress[index]}%</span>
//               </div>

//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${progress[index]}%` }}
//                 ></div>
//               </div>

//             </div>
//           ))}
//         </div>
      
//     </section>
//   );
// };

// export default TechSkills;



import React, { useState, useEffect } from "react";
import "./TechSkills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";

import { SiDjango, SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "React", level: 80, icon: <FaReact /> },
  { name: "Python", level: 85, icon: <FaPython /> },
  { name: "SQL", level: 80, icon: <FaDatabase /> },
  { name: "Django", level: 75, icon: <SiDjango /> },
  { name: "Bootstrap", level: 85, icon: <FaBootstrap /> },
  { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss /> },
];

const TechSkills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setProgress(skillsData.map((skill) => skill.level));
    }, 500);
  }, []);

  return (
    <section id="skills">

      <h2 className="subtitle11">
        Technical <span>Skills</span>
      </h2>

      <div className="technical">

        {skillsData.map((skill, index) => (

          <div className="skill" key={skill.name}>

            <div className="skill-header">

              <div className="skill-title">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>

              <span>{progress[index]}%</span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: `${progress[index]}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TechSkills;