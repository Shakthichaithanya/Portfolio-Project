import React from 'react';
import '../index.css';


const About = () => {
  const aboutMe = `

I am a Backend Java Spring Boot Developer with a strong focus on building scalable, secure, and high-performance backend systems. Over the course of my career, I have honed my skills in Java and the Spring Boot framework, creating efficient APIs and backend services that cater to complex business needs.

With extensive experience in designing, implementing, and maintaining backend systems, I have a deep understanding of backend architecture and microservices development. My expertise includes handling the full software development lifecycle, from gathering requirements to deploying applications, all while ensuring that security, performance, and scalability are at the forefront of every solution.

My passion lies in creating robust backend infrastructures that provide a seamless experience for users and developers alike. I excel in implementing authentication and authorization mechanisms, particularly through JWT token-based authentication and role-based access control, ensuring that all data and endpoints are secure. Additionally, I have experience working with RESTful APIs, integrating multiple databases, and developing microservices architectures that handle heavy data loads with ease.

I am constantly seeking opportunities to solve real-world problems through technology, and I enjoy working in dynamic team environments where collaboration and innovation are key. I thrive when faced with challenging tasks and always aim to contribute meaningfully to projects that push boundaries and create lasting value.
`
  return (
    <section id="about" className='about' >
      <h2 id="title">About Me</h2>
      <p className='justify'> {aboutMe}
      </p>
    </section>
  );
};

export default About;