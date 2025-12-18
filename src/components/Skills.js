import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px${({ theme }) => theme.colors.primary}; /* This can remain unchanged */

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic primary color */
    margin-bottom: 15px;
    text-align: center;
    transition: color 0.3s ease; /* Smooth transition for theme toggle */
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
      text-align: center;
      transition: color 0.3s ease; /* Smooth transition for text color */
    }
  }

  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth background transition */
`;


function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsContainer>
        <SkillCategory>
          <h3>Programming & Scripting</h3>
          <ul>
            <li>Python</li>
            <li>C, C++</li>
            <li>Assembly</li>
            <li>JavaScript</li>
            <li>Bash, PowerShell</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>Node.js, Express</li>
            <li>React</li>
            <li>FastAPI</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Cloud & Operating Systems</h3>
          <ul>
            <li>AWS</li>
            <li>Ubuntu, Unix</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Machine Learning & Data</h3>
          <ul>
            <li>Supervised/Unsupervised Learning</li>
            <li>Neural Networks</li>
            <li>Pandas, NumPy, Scikit-learn</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Web Development</h3>
          <ul>
            <li>Front-End: HTML, CSS, React</li>
            <li>Back-End: Node.js, FastAPI</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Software Design & Docs</h3>
          <ul>
            <li>UML & ERD Diagrams</li>
            <li>Design Patterns</li>
            <li>SRS & SDD Documentation</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>UI/UX & Collaboration</h3>
          <ul>
            <li>Figma, Mockups</li>
            <li>Git, GitHub</li>
          </ul>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;
