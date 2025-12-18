import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaDatabase, FaServer, FaCode, FaChartLine, FaUsers, FaClipboardList, FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import logos
import yesLogo from '../assets/yes.png';
import mhLogo from '../assets/MhLogo.png';
import EladLogo from '../assets/elad.png'

// (Specific tech icon images not used in current entries)

const ExperienceSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const ExperienceContainer = styled.div`
  position: relative;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary}40,
    ${({ theme }) => theme.colors.primary}20
  );
  
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: -47px;
  top: 40px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}20;
  
  ${({ isActive }) => isActive && `
    width: 20px;
    height: 20px;
    left: -49px;
    top: 38px;
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.primary}30;
  `}
  
  @media (max-width: 768px) {
    left: -37px;
    
    ${({ isActive }) => isActive && `
      left: -39px;
    `}
  }
`;

const JobCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 15px rgba(100, 255, 218, 0.2);
    border-color: ${({ theme }) => theme.colors.primary}40;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CompanyLogo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
  padding: 5px;
`;

const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.1em;
  margin: 0 0 5px 0;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-style: italic;
  margin: 0;
  font-size: 0.95em;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9em;
  margin-top: 10px;
  padding-left: 60px;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    margin-top: 15px;
    padding-left: 0;
  }
`;

const JobDetails = styled(motion.div)`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.accent}30;
  overflow: hidden;
`;

const SkillsSection = styled.div`
  margin-bottom: 25px;
`;

const SkillsTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  margin: 0 0 15px 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent}20;
  border-radius: 8px;
`;

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const SkillIconComponent = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.p`
  margin: 0 0 4px 0;
  font-size: 0.9em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillLevel = styled.div`
  display: flex;
  gap: 3px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ filled, theme }) =>
    filled ? theme.colors.primary : theme.colors.accent + '30'};
  transition: background-color 0.3s ease;
`;

const ResponsibilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Responsibility = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  
  &:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2em;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

function Experience() {
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderSkillLevel = (level) => {
    return (
      <SkillLevel>
        {[1, 2, 3, 4, 5].map((dot) => (
          <Dot key={dot} filled={dot <= level} />
        ))}
      </SkillLevel>
    );
  };

  const experiences = [
    {
      id: 1,
      company: "Elad Systems",
      logo: EladLogo,
      title: "NOC Engineer",
      duration: "2025 – Present | Ramat Gan",
      skills: [
        { name: "SQL (Analysis)", icon: <FaDatabase />, level: 4 },
        { name: "Monitoring & Diagnostics", icon: <FaChartLine />, level: 4 },
        { name: "Troubleshooting", icon: <FaTools />, level: 5 },
        { name: "Team Collaboration", icon: <FaUsers />, level: 4 }
      ],
      responsibilities: [
        "Provide support and monitoring for the Chameleon system used by Israeli hospitals.",
        "Perform real-time troubleshooting, SQL-based data analysis, and log diagnostics.",
        "Collaborate with development teams to ensure system reliability and performance."
      ]
    },
    {
      id: 2,
      company: "Shenkar — Academic Excellence Program",
      logo: mhLogo,
      title: "Programming Mentor",
      duration: "2023 – 2024 | Ramat Gan",
      skills: [
        { name: "C/C++", icon: <FaCode />, level: 4 },
        { name: "Problem Solving", icon: <FaChartLine />, level: 4 },
        { name: "Mentoring", icon: <FaUsers />, level: 5 }
      ],
      responsibilities: [
        "Selected as a mentor after achieving top grades (C: 90, C++: 85).",
        "Guided first-year students through programming fundamentals.",
        "Improved students' coding confidence and problem-solving skills."
      ]
    },
    {
      id: 3,
      company: "Yes Company",
      logo: yesLogo,
      title: "Team Leader, Technical Support",
      duration: "2020 – 2022 | Various",
      skills: [
        { name: "Technical Support", icon: <FaServer />, level: 5 },
        { name: "Leadership", icon: <FaUsers />, level: 5 },
        { name: "Performance Management", icon: <FaClipboardList />, level: 4 }
      ],
      responsibilities: [
        "Started as a Technical Support Representative, resolving customer issues efficiently.",
        "Promoted to Team Leader; managed 15–20 employees and maintained high service quality.",
        "Oversaw team performance and ensured effective task execution."
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <ExperienceContainer>
        <TimelineLine />
        {experiences.map((job) => (
          <JobCard
            key={job.id}
            onClick={() => toggleCard(job.id)}
            onMouseEnter={() => setHoveredCard(job.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <TimelineNode isActive={hoveredCard === job.id || expandedCards[job.id]} />
            <JobHeader>
              <CompanyInfo>
                <CompanyName>
                  <CompanyLogo src={job.logo} alt={job.company} />
                  {job.company}
                </CompanyName>
                <JobTitle>{job.title}</JobTitle>
                <Duration>{job.duration}</Duration>
                <ToggleButton>
                  {expandedCards[job.id] ? (
                    <>
                      <FaChevronUp /> Hide Details
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> View Details
                    </>
                  )}
                </ToggleButton>
              </CompanyInfo>
            </JobHeader>

            <AnimatePresence>
              {expandedCards[job.id] && (
                <JobDetails
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <SkillsSection>
                    <SkillsTitle>Technologies & Skills</SkillsTitle>
                    <SkillsGrid>
                      {job.skills.map((skill, index) => (
                        <SkillItem key={index}>
                          {skill.isImage ? (
                            <SkillIcon src={skill.icon} alt={skill.name} />
                          ) : (
                            <SkillIconComponent>{skill.icon}</SkillIconComponent>
                          )}
                          <SkillInfo>
                            <SkillName>{skill.name}</SkillName>
                            {renderSkillLevel(skill.level)}
                          </SkillInfo>
                        </SkillItem>
                      ))}
                    </SkillsGrid>
                  </SkillsSection>

                  <ResponsibilityList>
                    {job.responsibilities.map((resp, index) => (
                      <Responsibility key={index}>{resp}</Responsibility>
                    ))}
                  </ResponsibilityList>
                </JobDetails>
              )}
            </AnimatePresence>
          </JobCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
}

export default Experience;
