import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import { Fade } from "../../components/Animation/AnimationWrapper";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    { src: "KB.png", alt: "Knowledge Bubble", title: "KB Project" },
    { src: "him1.png", alt: "Portfolio Showcase", title: "Personal Project" },
    { src: "team.jpg", alt: "Team Collaboration", title: "Team Achievement" },
    { src: "kb-preview.png", alt: "Knowledge Bubble App Preview", title: "Knowledge Bubble" }
  ];

  // Auto-rotation disabled for manual control
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [carouselImages.length]);

  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        
        {/* Animated background particles */}
        <div className="particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
        
        <div className="container home-content">
          <Fade right>
            <div className="greeting-section">
              <span className="greeting-wave">👋</span>
              <h2 className="greeting-text">Hi, I'm</h2>
            </div>
            <h1 className="name-heading">Himanshu Kumar</h1>
            <div className="typewriter-container">
              <span className="code-bracket">&lt;</span>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer",
                    "MERN Stack Developer",
                    "React Native Developer",
                    "App Developer",
                    "React Developer",
                    "Open Source Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
              <span className="code-bracket">/&gt;</span>
            </div>
            <p className="hero-description">
              <span className="highlight-text">MERN Stack & React Native Developer</span> | Technical Lead @ Knowledge-Bubble | 
              <span className="trophy-text">Envisage'25 Winner 🏆</span> | App Developer @ Jabsz Studios | 
              Ex-Intern @ Innomatics Research Labs | Learning DevOps
            </p>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://www.linkedin.com/in/vashist-himanshu/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="btn-text">Connect on LinkedIn</span>
                <span className="btn-icon">→</span>
              </a>
              <a 
                className="btn btn-cv" 
                href="https://drive.google.com/file/d/1mBxF3JwZmeTLP3E7Sg9wcE9JnKXS3xbW/view?usp=sharing" 
                rel="noreferrer"
                target="_blank"
              >
                <span className="btn-text">View Resume</span>
                <span className="btn-icon">📄</span>
              </a>
              <a
                className="btn btn-secondary"
                href="mailto:himanshukumarvashist@gmail.com"
              >
                <span className="btn-text">Get in Touch</span>
                <span className="btn-icon">✉️</span>
              </a>
            </div>
          </Fade>
        </div>
      </div>

      {/* Features Carousel Section */}
      <div className="container-fluid features-carousel-section py-5" style={{ background: 'linear-gradient(180deg, #0a0e27 0%, #16213e 100%)', minHeight: '600px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Showcasing Innovation & Excellence</span>
            </h2>
            {/* <p style={{ fontSize: '1.1rem', color: '#a0a0a0' }}>Showcasing Innovation & Excellence</p> */}
          </div>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '0 80px' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '450px' }}>
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'scale(1)' : 'scale(0.95)',
                    transition: 'all 0.8s ease-in-out',
                    position: index === currentSlide ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: index === currentSlide ? 2 : 1
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    padding: '20px',
                    borderRadius: '20px'
                  }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                        objectFit: 'contain',
                        maxHeight: '450px',
                        display: 'block'
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', image.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '30px'
            }}>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: currentSlide === index ? '40px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: currentSlide === index 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(102, 126, 234, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
