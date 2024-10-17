import React from 'react';
import '../index.css';

const Skills = () => {
  const skills = ['Java', 'Spring Boot', 'Spring Security', 'SQL', 'Microservices','RabbitMQ','API Gateway','Docker','Git','Circuit Breaker'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
