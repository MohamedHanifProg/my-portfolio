import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const AboutContent = styled.div`
  flex-grow: 1;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <Title>About Me</Title>
        <Paragraph>
          I'm Mohamed Hanif, a fourth-year Software Engineering student at Shenkar, specializing in Cloud Development and Data with two semesters left to graduate. I currently work as an NOC Engineer at Elad Systems supporting the Chameleon system used across Israeli hospitals, with hands-on experience in real-time troubleshooting, SQL-based data analysis, and log diagnostics. Previously, I led a 15–20 person technical support team at Yes TV and served as a Programming Mentor in Shenkar's Academic Excellence Program. I'm passionate about data-driven solutions, distributed systems, and building reliable software — and I'm eager to grow as an AI Engineer or Software Developer.
        </Paragraph>
      </AboutContent>
    </AboutSection>
  );
}

export default About;

