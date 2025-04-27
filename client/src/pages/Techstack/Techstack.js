import React, { useState, useEffect } from "react";
import "./Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";

// Function to get a random skill level between 75 and 95
const getRandomSkillLevel = () => {
  return Math.floor(Math.random() * 21) + 75; // Random number between 75-95
};

// Skill Card Component
const SkillCard = ({ tech, animation }) => {
  const [skillLevel, setSkillLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a random skill level when the component mounts
    setSkillLevel(getRandomSkillLevel());

    // Animate the skill level bar after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Use the Fade component with the appropriate animation direction
  const FadeComponent = Fade;

  return (
    <FadeComponent left={animation === 'left'} right={animation === 'right'}>
      <div className="skill-card">
        <div className="skill-card-content">
          <tech.icon className="tech-icon" />
          <h4 className="skill-name">{tech.name}</h4>
          <div className="skill-level">
            <div
              className="skill-level-fill"
              style={{ width: isVisible ? `${skillLevel}%` : '0%' }}
            ></div>
          </div>
        </div>
      </div>
    </FadeComponent>
  );
};

const Techstack = () => {
  // Group technologies by category
  const frontendTech = TechstackList.filter(tech =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(tech._id)
  );

  const backendTech = TechstackList.filter(tech =>
    [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].includes(tech._id)
  );

  const fullStackTech = TechstackList.filter(tech =>
    [28, 29, 30, 31, 32, 33, 34].includes(tech._id)
  );

  const programmingLanguages = TechstackList.filter(tech =>
    [35, 36, 37, 38, 39].includes(tech._id)
  );

  const toolsTech = TechstackList.filter(tech =>
    [40, 41, 42, 43, 44, 45].includes(tech._id)
  );

  const designTech = TechstackList.filter(tech =>
    [46, 47, 48, 49, 50].includes(tech._id)
  );

  const marketingTech = TechstackList.filter(tech =>
    [51, 52].includes(tech._id)
  );

  const softSkills = TechstackList.filter(tech =>
    [53, 54, 55].includes(tech._id)
  );

  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👨‍💻 My toolkit includes programming languages, frameworks, databases, front-end
            and back-end tools, and APIs that I use to build modern applications
          </p>
        </RubberBand>

        <div className="tech-category">
          <h3 className="category-title">Frontend Technologies</h3>
          <div className="skills-grid">
            {frontendTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="left" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Backend Technologies</h3>
          <div className="skills-grid">
            {backendTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="right" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Full Stack & Development Frameworks</h3>
          <div className="skills-grid">
            {fullStackTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="left" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Programming Languages</h3>
          <div className="skills-grid">
            {programmingLanguages.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="right" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Tools & DevOps</h3>
          <div className="skills-grid">
            {toolsTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="left" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Design Tools</h3>
          <div className="skills-grid">
            {designTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="right" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Marketing & Monetization</h3>
          <div className="skills-grid">
            {marketingTech.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="left" />
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="category-title">Soft Skills</h3>
          <div className="skills-grid">
            {softSkills.map((tech) => (
              <SkillCard key={tech._id} tech={tech} animation="right" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
