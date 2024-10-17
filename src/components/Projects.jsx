import React from 'react';
import '../index.css';

const Projects = () => {
  const projectList = [
    { title: 'Employee Management System', description: 'The Employee Management System is a robust, secure backend project that demonstrates a practical implementation of Spring Boot with Spring Security JWT token-based authentication and role-based authorization. It offers clear distinctions between roles (Employee, Manager, Admin) with secure and well-defined access to resources based on the user\'s role.The project is highly scalable, enabling further integrations such as REST API clients, frontend applications (React, Angular)', link: 'https://github.com/Shakthichaithanya/Employee-Management-System' },
    { title: 'Tic-Tac-Toe', description: 'frontend tic-tac-toe project', link: 'https://tic-tac-toe-shakthi.netlify.app/' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
