import React from "react";
import './TechSkills.css';
import { useState, useEffect } from "react";

const skillsData = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
];

const TechSkills = () => {
  const [progress, setProgress] = useState(
    skillsData.map(() => 0)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skillsData.map(skill => skill.level));
    }, 400);

    return () => clearTimeout(timer);
  }, []);
return (
    <section id="skills">
      <h2 className="subtitle11">TECHNICAL SKILLS</h2>
        <div className="technical">
           {skillsData.map((skill, index) => (
            <div className="skill" key={skill.name}>
              
              <div className="skill-header">
                <span>{skill.name}</span>
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