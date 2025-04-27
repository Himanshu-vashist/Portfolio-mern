import React from 'react';
import './Certifications.css';
import { FaTrophy, FaAward, FaUsers, FaCode, FaBasketballBall } from 'react-icons/fa';
import Fade from "react-reveal/Fade";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Frontend Development Internship Certificate",
      description: "Certified in advanced React development concepts.",
      imgSrc: "Frontend.jpeg", // Replace with your image path
    },
    {
      id: 2,
      title: "Backend Development Internship Certificate",
      description: "Completed a full-stack web development program.",
      imgSrc: "Backend.jpg", // Replace with your image path
    },
    {
      id: 3,
      title: "Node js Certificate",
      description: "Certificate for mastering Nodejs.",
      imgSrc: "nodejs.png", // Replace with your image path
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Envisage'25 Winner 🏆",
      description: "Winner at Techno Main Saltlake organized IIC Hackathon, demonstrating exceptional problem-solving skills and technical expertise.",
      icon: <FaTrophy className="achievement-icon trophy" />,
      date: "2025",
      imgSrc: "achievement1.png" // Add your image path here
    },
    {
      id: 2,
      title: "Rotaract Club Member",
      description: "Actively participated in community service initiatives and events, enhancing leadership and organizational skills.",
      icon: <FaUsers className="achievement-icon community" />,
      date: "2023 - Present",
      imgSrc: "achievement2.jpg" // Add your image path here
    },
    {
      id: 3,
      title: "Smart India Hackathon Team Lead",
      description: "Led the development team that designed an Alumni Association platform for the University, showcasing project management and technical leadership.",
      icon: <FaCode className="achievement-icon hackathon" />,
      date: "2024",
      imgSrc: "achievement3.jpg" // Add your image path here
    },
    {
      id: 4,
      title: "HackBytes Team Lead",
      description: "Led the team to a top 10 finish in Innovathon at BIT Sindri, showcasing leadership and technical expertise.",
      icon: <FaAward className="achievement-icon award" />,
      date: "2024",
      imgSrc: "achievement4.jpg" // Add your image path here
    },
    {
      id: 5,
      title: "Basketball Sports Club Member",
      description: "Actively contributed to the college basketball team, fostering teamwork and discipline alongside technical pursuits.",
      icon: <FaBasketballBall className="achievement-icon sports" />,
      date: "2022 - Present",
      imgSrc: "achievement5.jpg" // Add your image path here
    }
  ];

  return (
    <div className="certifications-container" id="achievements">
      <Fade bottom>
        <h1 className="certifications-heading">Achievements & Certifications</h1>
        <p className="certifications-subheading">
          Recognitions, awards, and certifications that highlight my journey in technology and leadership.
        </p>
      </Fade>

      <div className="section-container">
        <Fade left>
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon-container">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-date">{achievement.date}</p>
                  <p className="achievement-description">{achievement.description}</p>

                  {/* Image container - uncomment when you have images */}
                  <div className="achievement-image-container">
                    {/* <img
                      src={achievement.imgSrc}
                      alt={achievement.title}
                      className="achievement-image"
                    /> */}
                    <div className="achievement-image-placeholder">
                      Add your achievement image here
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      <div className="section-container">
        <Fade right>
          <h2 className="section-title">Certifications</h2>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card">
                <img
                  src={certificate.imgSrc}
                  alt={certificate.title}
                  className="certificate-image"
                />
                <h2 className="certificate-title">{certificate.title}</h2>
                <p className="certificate-description">{certificate.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Certifications;
