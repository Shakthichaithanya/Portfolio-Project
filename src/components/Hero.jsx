// import '../index.css';

// const Hero = () => {

//   return (
//     <section id="home" className="hero">
//       <h2>Hi, I'm Shakthi Chaithanya Tirupati !</h2>
//       <p>I'm a Backend Developer passionate about building backend web applications and Exploring frontend technologies like React </p>
//       <a href="#projects" className="btn">Check My Projects</a>
//     </section>
//   );
// };

// export default Hero;

// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../index.css';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: white;
`;

const SubTitle = styled(motion.h2)`
  font-size: 2rem;
  color: #ccc;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        className='justify-center'>
          Hi, I'm Shakthi Chaithanya Tirupati !
        </Title>
        <SubTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        className='justify-center'>
          I'm a Backend Developer passionate about building backend web applications and Exploring frontend technologies like React
        </SubTitle>
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;