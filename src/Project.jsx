import React from "react";
import "./Project.css";
const project = [
  {
    title: "Construction Website",
    description:
      "A modern and responsive construction company website showcasing services, ongoing projects, completed works, and contact information. Designed to provide clients with a professional overview of the company's expertise and portfolio.",
    link: "https://project2construction-8pe2.vercel.app/",
  },
  {
    title: "Tasty Bites Website",
    description:
       "A food ordering and restaurant website featuring delicious menu items, special offers, customer reviews, and online ordering functionality. Built with an attractive UI to enhance the user experience.",
    link: "https://tastyfoodproject-c83d.vercel.app/write",
  },
  {
    title: "E-Commerce Grocery Website",
    description:
      "An online grocery shopping platform that allows users to browse products, view categories, add items to the cart, and place orders conveniently. Developed with a responsive design for seamless shopping across devices.",
    link: "https://grocery-eta-ochre.vercel.app/",
  },
  {
    title: "VTS Website",
    description:
       "A Vehicle Tracking System (VTS) website designed to monitor and manage vehicle information efficiently. Features include vehicle details management, tracking information display, and a user-friendly dashboard for better fleet monitoring.",
    link: "https://project3vts-vg6m.vercel.app/solution",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="project-heading">
          My <span>Projects</span>
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="view-project">
                View Project →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
