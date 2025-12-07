// import React from "react";
// import "./Projects.css";
// import { Fade } from "../../components/Animation/AnimationWrapper";

// const Projects = () => {
//   const projectsData = [
//     {
//       id: 1,
//       title: "Knowledge Bubble - Educational Mobile Learning Platform",
//       category: "Featured",
//       type: "React Native Mobile App",
//       description: "A comprehensive educational mobile application that makes learning engaging and interactive for users of all ages. Features 10+ educational chapters, gamified learning with star-based progression, and multi-platform support.",
//       image: "knowledge-bubble.png",
//       technologies: ["React Native", "TypeScript", "Firebase", "Android Studio", "Xcode"],
//       features: [
//         "Interactive Chapter System with 10+ educational topics",
//         "Gamified Learning with star-based progression",
//         "Multi-Platform Support (iOS & Android)",
//         "Rich Media Integration with interactive puzzles",
//         "Dark/Light theme support with animated backgrounds",
//         "Performance Optimization with WebP image conversion"
//       ],
//       achievements: [
//         "Successfully deployed on Google Play Store",
//         "Production-ready app with optimized bundle size",
//         "Modular architecture for easy content expansion",
//         "Comprehensive testing suite for reliability"
//       ],
//       role: "Technical Lead",
//       duration: "Feb 2025 - Present",
//       company: "Jabsz Studios",
//       playStoreUrl: "https://play.google.com/store/apps/details?id=com.knowledge.bubble",
//       githubUrl: "#",
//       featured: true,
//       status: "Live on Play Store"
//     },
//     {
//       id: 2,
//       title: "E-Alumni Platform",
//       category: "Full Stack",
//       type: "Web Application",
//       description: "Your one-stop solution for all alumni needs! A comprehensive platform connecting alumni with their alma mater.",
//       image: "E-Alumni.png",
//       technologies: ["Node.js", "Express", "EJS", "MongoDB"],
//       demoUrl: "https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp",
//       githubUrl: "https://github.com/Himanshu-vashist/E-Alumni",
//       featured: false
//     },
//     {
//       id: 3,
//       title: "WanderLust Travel Platform",
//       category: "Full Stack",
//       type: "Web Application",
//       description: "A modern travel website for exploring and booking travel destinations with user-friendly interface.",
//       image: "WANDERLUST.jpeg",
//       technologies: ["Node.js", "Express", "MongoDB", "EJS"],
//       githubUrl: "https://github.com/Himanshu-vashist/WanderWay",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "E-Commerce Platform",
//       category: "MERN",
//       type: "Web Application",
//       description: "A full-featured e-commerce platform with modern design and comprehensive functionality.",
//       image: "E-commerce.jpeg",
//       technologies: ["React", "Node.js", "Express", "MongoDB"],
//       githubUrl: "#",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Farmer Assistant App",
//       category: "Mobile",
//       type: "Mobile Application",
//       description: "An innovative mobile application designed to assist farmers with modern agricultural techniques and market information.",
//       image: "farmer-assistant.png",
//       technologies: ["React Native", "Node.js", "Express", "MongoDB"],
//       githubUrl: "#",
//       featured: false
//     },
//     {
//       id: 6,
//       title: "ToDo Task Manager",
//       category: "Frontend",
//       type: "Web Application",
//       description: "A sleek and efficient task management application with intuitive user interface.",
//       image: "ToDo.jpeg",
//       technologies: ["React", "JavaScript", "CSS", "Local Storage"],
//       githubUrl: "#",
//       featured: false
//     }
//   ];

//   const featuredProject = projectsData.find(project => project.featured);
//   const otherProjects = projectsData.filter(project => !project.featured);

//   return (
//     <div className="container-fluid projects" id="projects">
//       <div className="container">
//         <Fade bottom>
//           <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//             Featured Projects & Portfolio
//           </h2>
//           <hr />
//         </Fade>

//         {/* Featured Project Section */}
//         {featuredProject && (
//           <Fade bottom>
//             <div className="featured-project-section mb-5">
//               <div className="featured-badge">
//                 <span className="featured-text">⭐ FEATURED PROJECT</span>
//               </div>
              
//               <div className="row featured-project-container">
//                 <div className="col-lg-6 col-md-12 mb-4">
//                   <div className="featured-project-image">
//                     <img 
//                       src={featuredProject.image} 
//                       alt={featuredProject.title}
//                       className="img-fluid rounded shadow-lg"
//                     />
//                     <div className="project-status-badge">
//                       {featuredProject.status}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="col-lg-6 col-md-12">
//                   <div className="featured-project-content">
//                     <div className="project-meta">
//                       <span className="project-category">{featuredProject.category}</span>
//                       <span className="project-type">{featuredProject.type}</span>
//                     </div>
                    
//                     <h3 className="featured-project-title">{featuredProject.title}</h3>
                    
//                     <div className="project-role-info">
//                       <p><strong>Role:</strong> {featuredProject.role}</p>
//                       <p><strong>Duration:</strong> {featuredProject.duration}</p>
//                       <p><strong>Company:</strong> {featuredProject.company}</p>
//                     </div>
                    
//                     <p className="featured-project-description">
//                       {featuredProject.description}
//                     </p>
                    
//                     <div className="project-features mb-3">
//                       <h5>Key Features:</h5>
//                       <ul>
//                         {featuredProject.features?.slice(0, 4).map((feature, index) => (
//                           <li key={index}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div className="project-tech-stack mb-4">
//                       {featuredProject.technologies.map((tech, index) => (
//                         <span key={index} className="tech-badge">{tech}</span>
//                       ))}
//                     </div>
                    
//                     <div className="featured-project-links">
//                       {featuredProject.playStoreUrl && (
//                         <a 
//                           href={featuredProject.playStoreUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="btn btn-primary me-2 mb-2"
//                         >
//                           📱 Play Store
//                         </a>
//                       )}
//                       {featuredProject.githubUrl && featuredProject.githubUrl !== "#" && (
//                         <a 
//                           href={featuredProject.githubUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="btn btn-outline-primary me-2 mb-2"
//                         >
//                           GitHub
//                         </a>
//                       )}
//                       <button className="btn btn-info mb-2">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Achievements Section for Featured Project */}
//               <div className="achievements-section mt-4">
//                 <h5>Key Accomplishments:</h5>
//                 <div className="row">
//                   {featuredProject.achievements?.map((achievement, index) => (
//                     <div key={index} className="col-md-6 mb-2">
//                       <div className="achievement-item">
//                         <span className="achievement-icon">✅</span>
//                         <span>{achievement}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Fade>
//         )}

//         {/* Other Projects Section */}
//         <Fade bottom>
//           <h3 className="text-center mb-4 other-projects-title">Other Notable Projects</h3>
//         </Fade>
        
//         <div className="row other-projects">
//           {otherProjects.map((project, index) => (
//             <div key={project.id} className="col-lg-4 col-md-6 mb-4">
//               <Fade left={index % 2 === 0} right={index % 2 === 1} delay={index * 0.1}>
//                 <div className="project-card">
//                   <div className="project-card-image">
//                     <span className="project-card-notify-badge">{project.category}</span>
//                     <img src={project.image} alt={project.title} className="img-fluid" />
//                   </div>
                  
//                   <div className="project-card-overlay">
//                     {project.technologies.slice(0, 4).map((tech, techIndex) => (
//                       <span key={techIndex} className="project-card-detail-badge">{tech}</span>
//                     ))}
//                   </div>
                  
//                   <div className="project-card-body text-center">
//                     <div className="project-card-title">
//                       <h6 className="text-uppercase">{project.title}</h6>
//                     </div>
//                     <p className="project-card-description">{project.description}</p>
                    
//                     <div className="project-card-actions">
//                       {project.demoUrl && (
//                         <a
//                           href={project.demoUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="project-action-btn demo-btn"
//                         >
//                           Demo
//                         </a>
//                       )}
//                       {project.githubUrl && project.githubUrl !== "#" && (
//                         <a
//                           href={project.githubUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="project-action-btn github-btn"
//                         >
//                           GitHub
//                         </a>
//                       )}
//                       {project.githubUrl === "#" && (
//                         <button className="project-action-btn private-btn" disabled>
//                           Private Repo
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </Fade>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
//                   <div className="ad-title m-auto">
//                     <h5 className="text-uppercase">Todo App</h5>
//                   </div>
//                   <a className="ad-btn" href="https://github.com/Himanshu-vashist/To-Do-Task-9">
//                     View
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Spin>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import "./Projects.css";
import { FaInfoCircle, FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const Projects = () => {
  // State variables for each project modal
  const [showFarmerModal, setShowFarmerModal] = useState(false);
  const [showKnowledgeModal, setShowKnowledgeModal] = useState(false);
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);
  const [showEAlumniModal, setShowEAlumniModal] = useState(false);
  const [showWanderlustModal, setShowWanderlustModal] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);

  // Handler functions for each modal
  const handleCloseFarmerModal = () => setShowFarmerModal(false);
  const handleShowFarmerModal = () => setShowFarmerModal(true);

  const handleCloseKnowledgeModal = () => setShowKnowledgeModal(false);
  const handleShowKnowledgeModal = () => setShowKnowledgeModal(true);

  const handleCloseEcommerceModal = () => setShowEcommerceModal(false);
  const handleShowEcommerceModal = () => setShowEcommerceModal(true);

  const handleCloseEAlumniModal = () => setShowEAlumniModal(false);
  const handleShowEAlumniModal = () => setShowEAlumniModal(true);

  const handleCloseWanderlustModal = () => setShowWanderlustModal(false);
  const handleShowWanderlustModal = () => setShowWanderlustModal(true);

  const handleCloseTodoModal = () => setShowTodoModal(false);
  const handleShowTodoModal = () => setShowTodoModal(true);

  const handleCloseStudentModal = () => setShowStudentModal(false);
  const handleShowStudentModal = () => setShowStudentModal(true);

  const handleCloseEducationModal = () => setShowEducationModal(false);
  const handleShowEducationModal = () => setShowEducationModal(true);

  return (
    <>
      {/* Modern Featured Projects Section */}
      <div className="featured-projects-modern" id="projects">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <div className="badge-wrapper mb-3">
              <span className="featured-badge-new">⭐ Featured Projects</span>
            </div>
            <h1 className="section-title">
              My <span className="gradient-text">Best Work</span>
            </h1>
            <p className="section-subtitle">
              Showcasing innovative mobile and web applications
            </p>
          </div>

          {/* Premium Knowledge Bubble Showcase */}
          {/* KB Logo & Title Header */}
          <div className="text-center mb-5" style={{ animation: "fadeInUp 1s ease-out" }}>
            <img 
              src="kblogo.png" 
              alt="Knowledge Bubble Logo"
              style={{ 
                width: "140px",
                height: "140px",
                objectFit: "contain",
                filter: "drop-shadow(0 10px 25px rgba(102, 126, 234, 0.4))",
                animation: "float 3s ease-in-out infinite",
                marginBottom: "1.5rem"
              }}
            />
            <h2 className="display-4 fw-bold mb-2" style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Knowledge Bubble
            </h2>
            <p className="lead text-muted mb-3">Revolutionary Educational Mobile Learning Platform</p>
            <div className="d-inline-flex gap-3 justify-content-center flex-wrap">
              <span className="badge px-4 py-2 shadow" style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "600",
                animation: "pulse 2s infinite"
              }}>
                🟢 Live on Play Store
              </span>
              <span className="badge px-4 py-2" style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)",
                color: "#3b82f6",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "600"
              }}>
                ⭐ 4.8+ Rating
              </span>
              <span className="badge px-4 py-2" style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)",
                color: "#10b981",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "600"
              }}>
                📚 10+ Chapters
              </span>
              <span className="badge px-4 py-2" style={{
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.1) 100%)",
                color: "#f59e0b",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "600"
              }}>
                🎮 Gamified Learning
              </span>
            </div>
          </div>

          {/* Full Width KB Preview Image */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="position-relative" style={{ animation: "fadeInUp 1.2s ease-out" }}>
                <div className="card border-0 shadow-lg" style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(102, 126, 234, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                }}>
                  <img 
                    src="kb-preview.png" 
                    alt="Knowledge Bubble App Preview" 
                    className="img-fluid w-100" 
                    style={{ 
                      objectFit: "cover",
                      borderRadius: "30px"
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features & Description Row */}
          <div className="row g-5 align-items-start mb-5">
            {/* Left: Description */}
            <div className="col-lg-6">
              <div style={{ animation: "fadeInLeft 1.4s ease-out" }}>
                <div className="mb-4">
                  <span className="badge px-4 py-2 mb-3" style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}>
                    🏆 Featured Project - Technical Lead
                  </span>
                  <p className="lead text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    A cutting-edge educational mobile application that transforms learning into an engaging, 
                    interactive experience. Developed with <strong>React Native</strong> and <strong>TypeScript</strong>, 
                    Knowledge Bubble delivers gamified educational content across multiple platforms, making complex 
                    topics accessible and enjoyable for learners of all ages.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    <span className="me-2">✨</span>Key Highlights
                  </h5>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="d-flex align-items-start p-3 rounded-3" style={{
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.15)"
                      }}>
                        <span className="me-3 fs-4">🎮</span>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: "#2d3748" }}>Gamified Learning Experience</h6>
                          <p className="mb-0 text-secondary small">Star-based progression system with unlockable levels and achievements to keep learners motivated and engaged throughout their educational journey.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start p-3 rounded-3" style={{
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.15)"
                      }}>
                        <span className="me-3 fs-4">📱</span>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: "#2d3748" }}>Cross-Platform Excellence</h6>
                          <p className="mb-0 text-secondary small">Built with React Native for seamless performance on both iOS and Android, ensuring a consistent, high-quality experience across all devices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start p-3 rounded-3" style={{
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)",
                        border: "1px solid rgba(102, 126, 234, 0.15)"
                      }}>
                        <span className="me-3 fs-4">🎨</span>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: "#2d3748" }}>Rich Interactive Content</h6>
                          <p className="mb-0 text-secondary small">Features 10+ educational chapters with interactive puzzles, multimedia integration, and visually stunning animations that make learning captivating.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    <span className="me-2">⚡</span>Technology Stack
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {["React Native", "TypeScript", "Firebase", "Android Studio", "Xcode", "Redux", "REST APIs"].map((tech, i) => (
                      <span key={i} className="badge px-3 py-2" style={{
                        background: `linear-gradient(135deg, ${[
                          "rgba(59, 130, 246, 0.15)",
                          "rgba(16, 185, 129, 0.15)",
                          "rgba(245, 158, 11, 0.15)",
                          "rgba(236, 72, 153, 0.15)",
                          "rgba(147, 51, 234, 0.15)",
                          "rgba(239, 68, 68, 0.15)",
                          "rgba(6, 182, 212, 0.15)"
                        ][i]} 0%, ${[
                          "rgba(59, 130, 246, 0.05)",
                          "rgba(16, 185, 129, 0.05)",
                          "rgba(245, 158, 11, 0.05)",
                          "rgba(236, 72, 153, 0.05)",
                          "rgba(147, 51, 234, 0.05)",
                          "rgba(239, 68, 68, 0.05)",
                          "rgba(6, 182, 212, 0.05)"
                        ][i]} 100%)`,
                        color: [
                          "#3b82f6",
                          "#10b981",
                          "#f59e0b",
                          "#ec4899",
                          "#9333ea",
                          "#ef4444",
                          "#06b6d4"
                        ][i],
                        borderRadius: "12px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        border: `1px solid ${[
                          "rgba(59, 130, 246, 0.3)",
                          "rgba(16, 185, 129, 0.3)",
                          "rgba(245, 158, 11, 0.3)",
                          "rgba(236, 72, 153, 0.3)",
                          "rgba(147, 51, 234, 0.3)",
                          "rgba(239, 68, 68, 0.3)",
                          "rgba(6, 182, 212, 0.3)"
                        ][i]}`
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.JabszGamingStudios.KnowledgeBubble&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg px-5 py-3"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      borderRadius: "15px",
                      color: "white",
                      fontWeight: "600",
                      boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
                    }}
                  >
                    <FaPlay className="me-2" />
                    View on Play Store
                  </a>
                  <button 
                    className="btn btn-lg px-5 py-3"
                    onClick={handleShowKnowledgeModal}
                    style={{
                      background: "white",
                      border: "2px solid #667eea",
                      borderRadius: "15px",
                      color: "#667eea",
                      fontWeight: "600",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FaInfoCircle className="me-2" />
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* App Preview Showcase */}
          <div className="row g-4 mb-5" style={{ display: "none" }}>
            <div className="col-12 text-center mb-3">
              <h4 className="fw-bold" style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                <span className="me-2">📱</span>App Preview
              </h4>
              <p className="text-muted">Experience the intuitive design and engaging interface</p>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{
                borderRadius: "30px",
                overflow: "hidden",
                transition: "all 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(102, 126, 234, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.15)";
              }}>
                <img 
                  src="kb-preview.png" 
                  alt="Knowledge Bubble App Preview" 
                  className="img-fluid w-100" 
                  style={{ 
                    objectFit: "cover",
                    maxHeight: "600px"
                  }} 
                />
              </div>
            </div>
          </div>

          {/* App Showcase Grid - 3 Featured Apps */}
          <div className="apps-showcase-grid" style={{ display: "none" }}>
            {/* Removed - Replaced with premium showcase above */}
            <div className="app-showcase-card" style={{ animationDelay: "0s" }}>
              <div className="app-card-inner">
                <div className="app-card-header">
                  <div className="app-icon-wrapper">
                    <span className="app-icon">📱</span>
                  </div>
                  <div className="app-status-badge live">
                    <span className="status-dot"></span>
                    Live on Play Store
                  </div>
                </div>
                
                <div className="app-card-image">
                  <img src="knowledge-bubble.png" alt="Knowledge Bubble" />
                  <div className="app-overlay">
                    <div className="app-stats">
                      <div className="stat-item">
                        <span className="stat-icon">⭐</span>
                        <span className="stat-value">4.8+</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">📚</span>
                        <span className="stat-value">10+ Chapters</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-card-content">
                  <h3 className="app-title">Knowledge Bubble</h3>
                  <p className="app-category">Educational Mobile Platform</p>
                  <p className="app-description">
                    Comprehensive educational mobile app with gamified learning, 
                    interactive chapters, and multi-platform support for engaging education.
                  </p>
                  
                  <div className="app-tech-stack">
                    <span className="tech-chip">React Native</span>
                    <span className="tech-chip">TypeScript</span>
                    <span className="tech-chip">Firebase</span>
                  </div>

                  <div className="app-meta">
                    <div className="meta-item">
                      <span className="meta-label">Role:</span>
                      <span className="meta-value">Technical Lead</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Company:</span>
                      <span className="meta-value">Jabsz Studios</span>
                    </div>
                  </div>

                  <div className="app-actions">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.JabszGamingStudios.KnowledgeBubble&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-app-primary"
                    >
                      <FaPlay /> Play Store
                    </a>
                    <button 
                      className="btn-app-secondary"
                      onClick={handleShowKnowledgeModal}
                    >
                      <FaInfoCircle /> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* App 2: Farmer Assistant */}
            <div className="app-showcase-card" style={{ animationDelay: "0.2s" }}>
              <div className="app-card-inner">
                <div className="app-card-header">
                  <div className="app-icon-wrapper">
                    <span className="app-icon">🌾</span>
                  </div>
                  <div className="app-status-badge development">
                    <span className="status-dot"></span>
                    In Development
                  </div>
                </div>
                
                <div className="app-card-image">
                  <img src="farmer-assistant.png" alt="Farmer Assistant" />
                  <div className="app-overlay">
                    <div className="app-stats">
                      <div className="stat-item">
                        <span className="stat-icon">🔍</span>
                        <span className="stat-value">QR Scan</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">📈</span>
                        <span className="stat-value">Price AI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-card-content">
                  <h3 className="app-title">Farmer Assistant</h3>
                  <p className="app-category">Agricultural Management App</p>
                  <p className="app-description">
                    Empowering farmers with QR code verification, market price predictions, 
                    weather forecasting, and comprehensive crop management tools.
                  </p>
                  
                  <div className="app-tech-stack">
                    <span className="tech-chip">React Native</span>
                    <span className="tech-chip">Expo</span>
                    <span className="tech-chip">Firebase</span>
                  </div>

                  <div className="app-meta">
                    <div className="meta-item">
                      <span className="meta-label">Role:</span>
                      <span className="meta-value">Full Stack Developer</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Duration:</span>
                      <span className="meta-value">Apr 2025 - Present</span>
                    </div>
                  </div>

                  <div className="app-actions">
                    <button 
                      className="btn-app-primary"
                      onClick={handleShowFarmerModal}
                    >
                      <FaInfoCircle /> View Details
                    </button>
                    <button className="btn-app-secondary" disabled>
                      <FaGithub /> Private Repo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* App 3: E-Commerce Platform */}
            <div className="app-showcase-card" style={{ animationDelay: "0.4s" }}>
              <div className="app-card-inner">
                <div className="app-card-header">
                  <div className="app-icon-wrapper">
                    <span className="app-icon">🛒</span>
                  </div>
                  <div className="app-status-badge completed">
                    <span className="status-dot"></span>
                    Completed
                  </div>
                </div>
                
                <div className="app-card-image">
                  <img src="E-commerce.jpeg" alt="E-Commerce Platform" />
                  <div className="app-overlay">
                    <div className="app-stats">
                      <div className="stat-item">
                        <span className="stat-icon">🛍️</span>
                        <span className="stat-value">Full Stack</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">💳</span>
                        <span className="stat-value">Payments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-card-content">
                  <h3 className="app-title">E-Commerce Platform</h3>
                  <p className="app-category">MERN Stack Application</p>
                  <p className="app-description">
                    Full-featured e-commerce platform with product management, 
                    shopping cart, payment integration, and admin dashboard.
                  </p>
                  
                  <div className="app-tech-stack">
                    <span className="tech-chip">React</span>
                    <span className="tech-chip">Node.js</span>
                    <span className="tech-chip">MongoDB</span>
                  </div>

                  <div className="app-meta">
                    <div className="meta-item">
                      <span className="meta-label">Type:</span>
                      <span className="meta-value">Web Application</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Stack:</span>
                      <span className="meta-value">MERN</span>
                    </div>
                  </div>

                  <div className="app-actions">
                    <button 
                      className="btn-app-primary"
                      onClick={handleShowEcommerceModal}
                    >
                      <FaInfoCircle /> View Details
                    </button>
                    <button className="btn-app-secondary" disabled>
                      <FaGithub /> Private Repo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div> 

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          /* Dark Mode Overrides for Knowledge Bubble Featured Section */
          .kb-featured-card,
          .kb-info-card,
          .kb-features-card,
          .kb-feature-item,
          .kb-tech-badge,
          .kb-success-badge,
          .kb-dev-badge,
          .kb-accomplishment-card {
            background: var(--kb-background) !important;
            color: white !important;
          }
          
          .kb-featured-card *,
          .kb-info-card *,
          .kb-features-card *,
          .kb-feature-item *,
          .kb-accomplishment-card * {
            color: white !important;
          }
          
          .kb-tech-badge {
            color: white !important;
          }
          
          /* Force colors in dark mode */
          [data-theme="dark"] .kb-featured-card,
          [data-theme="dark"] .kb-info-card,
          [data-theme="dark"] .kb-features-card,
          [data-theme="dark"] .kb-feature-item,
          [data-theme="dark"] .kb-tech-badge,
          [data-theme="dark"] .kb-accomplishment-card,
          body.dark .kb-featured-card,
          body.dark .kb-info-card,
          body.dark .kb-features-card,
          body.dark .kb-feature-item,
          body.dark .kb-tech-badge,
          body.dark .kb-accomplishment-card,
          .dark .kb-featured-card,
          .dark .kb-info-card,
          .dark .kb-features-card,
          .dark .kb-feature-item,
          .dark .kb-tech-badge,
          .dark .kb-accomplishment-card {
            background: var(--kb-background) !important;
            color: white !important;
          }
          
          /* Additional dark mode protection */
          .featured-project-section .card,
          .featured-project-section .badge {
            color: white !important;
          }
        `}</style>
      </div>

      <div className="container project-section" id="projects">
        <div className="text-center mb-5 py-4" style={{ animation: "fadeInUp 1s ease-out" }}>
          <div className="d-inline-block position-relative mb-4">
            <h2 className="display-4 fw-bold mb-0" style={{
              color: "var(--primary-text-color, #2d3748)",
              letterSpacing: "1px"
            }}>
              Other Notable Projects
            </h2>
            <div style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
              borderRadius: "10px"
            }}></div>
          </div>
        </div>

        {/* Farmer Assistant Project Modal */}
        {showFarmerModal && (
          <div className="custom-modal-overlay" onClick={handleCloseFarmerModal}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="custom-modal-header">
                <h3 className="custom-modal-title">🌾 Farmer Assistant - Mobile Application</h3>
                <button className="custom-modal-close" onClick={handleCloseFarmerModal}>×</button>
              </div>
              <div className="custom-modal-body">
                <p style={{ color: "#666" }}>Apr 2025 - Present</p>
                <p>
                  Developed a comprehensive mobile application called "Farmer Assistant" using React Native and Expo,
                  designed to empower farmers with digital tools for agricultural management and decision-making.
                  Bridging technology and agriculture to create sustainable farming solutions!
                </p>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Features:</h5>
                <ul>
                  <li>
                    <strong>🔍 Product Verification System:</strong> Implemented QR code scanning functionality that allows
                    farmers to verify the authenticity of agricultural products, protecting them from counterfeit goods
                  </li>
                  <li>
                    <strong>📈 Market Price Predictions:</strong> Integrated data analytics to provide farmers with
                    forecasted market prices, helping them make informed decisions about when to sell their produce
                  </li>
                  <li>
                    <strong>☁️ Weather Forecasting:</strong> Incorporated real-time weather data to assist farmers in
                    planning their agricultural activities based on accurate weather predictions
                  </li>
                  <li>
                    <strong>🌱 Crop Management Tools:</strong> Created intuitive interfaces for tracking crop cycles,
                    managing inventory, and optimizing resource allocation
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Technical Implementation:</h5>
                <ul>
                  <li>
                    <strong>📱 Cross-Platform:</strong> Built with React Native and Expo framework for cross-platform compatibility
                  </li>
                  <li>
                    <strong>🔥 Backend:</strong> Utilized Firebase for authentication and real-time database management
                  </li>
                  <li>
                    <strong>📸 Camera Integration:</strong> Implemented camera integration for QR code scanning using expo-camera
                  </li>
                  <li>
                    <strong>⚙️ API Integration:</strong> Connected to a custom backend API hosted on Render for data processing and analytics
                  </li>
                  <li>
                    <strong>✨ UI/UX:</strong> Designed with responsive UI components for optimal user experience across different device sizes
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Deployment:</h5>
                <ul>
                  <li>
                    <strong>🚀 Platform:</strong> Successfully deployed the application using Expo's platform, allowing for easy distribution and updates
                  </li>
                  <li>
                    <strong>🔗 Distribution:</strong> Created a shareable link for stakeholders to access and test the application through the Expo Go app
                  </li>
                  <li>
                    <strong>🔄 CI/CD:</strong> Implemented continuous integration for seamless updates and feature additions
                  </li>
                </ul>

                <p style={{ marginTop: "1.5rem" }}>
                  <strong>💡 Impact:</strong> This project demonstrates my passion for creating technology that makes a real difference in farmers' lives!
                  By combining modern mobile development with agricultural needs, Farmer Assistant helps bridge the digital divide in farming communities.
                </p>
              </div>
              <div className="custom-modal-footer">
                <button className="custom-modal-btn custom-modal-btn-primary" onClick={handleCloseFarmerModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* KnowledgeBubble Project Modal */}
        {showKnowledgeModal && (
          <div className="custom-modal-overlay" onClick={handleCloseKnowledgeModal}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="custom-modal-header">
                <h3 className="custom-modal-title">📱 Knowledge Bubble - Educational Mobile Learning Platform</h3>
                <button className="custom-modal-close" onClick={handleCloseKnowledgeModal}>×</button>
              </div>
              <div className="custom-modal-body">
                <p style={{ color: "#666" }}>Feb 2025 - Present • Associated with Jabsz Studios</p>
                <p>
                  Developed a comprehensive educational mobile application designed to make learning engaging and interactive for users of all ages.
                  Knowledge Bubble transforms complex topics into digestible, gamified learning experiences across multiple subject areas.
                </p>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Features & Achievements:</h5>
                <ul>
                  <li>
                    <strong>📚 Interactive Chapter System:</strong> Built 10+ educational chapters covering diverse topics including
                    Solar System, Ancient Civilizations, Human Body, Coding, and more
                  </li>
                  <li>
                    <strong>🎮 Gamified Learning:</strong> Implemented a star-based progression system with level unlocking mechanics
                    to enhance user engagement
                  </li>
                  <li>
                    <strong>📱 Multi-Platform Support:</strong> Developed using React Native for seamless iOS and Android deployment
                  </li>
                  <li>
                    <strong>🎨 Rich Media Integration:</strong> Incorporated high-quality images, interactive puzzles, and multimedia content
                  </li>
                  <li>
                    <strong>🌓 Responsive UI/UX:</strong> Created an intuitive interface with dark/light theme support and animated backgrounds
                  </li>
                  <li>
                    <strong>⚡ Performance Optimization:</strong> Implemented WebP image conversion and asset optimization for faster load times
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Technical Implementation:</h5>
                <ul>
                  <li>
                    <strong>⚛️ Frontend:</strong> React Native, TypeScript, React Navigation
                  </li>
                  <li>
                    <strong>� State Management:</strong> Custom hooks and context API for efficient data flow
                  </li>
                  <li>
                    <strong>🔥 Authentication:</strong> Firebase Auth with Google Sign-In integration
                  </li>
                  <li>
                    <strong>� Backend Services:</strong> Firebase Firestore for data persistence
                  </li>
                  <li>
                    <strong>🎨 UI Components:</strong> Custom-designed components with Material Design principles
                  </li>
                  <li>
                    <strong>🛠️ Build Optimization:</strong> Automated build scripts with image optimization and asset management
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Accomplishments:</h5>
                <ul>
                  <li>
                    <strong>🚀 Production Deployment:</strong> Successfully deployed production-ready app with optimized bundle size
                  </li>
                  <li>
                    <strong>🏗️ Modular Architecture:</strong> Implemented modular architecture for easy content expansion
                  </li>
                  <li>
                    <strong>📱 Cross-Device Experience:</strong> Achieved smooth user experience across different device sizes
                  </li>
                  <li>
                    <strong>🧪 Quality Assurance:</strong> Created comprehensive testing suite for reliability
                  </li>
                  <li>
                    <strong>🔄 CI/CD Pipeline:</strong> Established CI/CD pipeline for efficient development workflow
                  </li>
                </ul>

                <p style={{ marginTop: "1.5rem" }}>
                  <strong>💡 Impact:</strong> Knowledge Bubble makes learning fun, accessible, and engaging for learners of all ages,
                  transforming traditional education through interactive mobile technology.
                </p>
              </div>
              <div className="custom-modal-footer">
                <button className="custom-modal-btn custom-modal-btn-primary" onClick={handleCloseKnowledgeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* E-commerce Project Modal */}
        {showEcommerceModal && (
          <div className="custom-modal-overlay" onClick={handleCloseEcommerceModal}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="custom-modal-header">
                <h3 className="custom-modal-title">🛒 E-commerce Application</h3>
                <button className="custom-modal-close" onClick={handleCloseEcommerceModal}>×</button>
              </div>
              <div className="custom-modal-body">
                <p style={{ color: "#666" }}>Jan 2025 - Mar 2025</p>
                <p>
                  Developed a full-featured e-commerce platform using the MERN stack (MongoDB, Express, React, Node.js),
                  providing users with a seamless shopping experience from product discovery to checkout.
                </p>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Features:</h5>
                <ul>
                  <li>
                    <strong>🔍 Advanced Product Search:</strong> Implemented filters, sorting, and search functionality to help users
                    find products quickly and efficiently
                  </li>
                  <li>
                    <strong>🛒 Shopping Cart System:</strong> Created a robust cart system with real-time updates, quantity adjustments,
                    and persistent storage
                  </li>
                  <li>
                    <strong>💳 Secure Payment Integration:</strong> Integrated Stripe payment gateway for secure and seamless
                    transaction processing
                  </li>
                  <li>
                    <strong>👤 User Authentication:</strong> Implemented JWT-based authentication with role-based access control
                    for customers and administrators
                  </li>
                  <li>
                    <strong>📊 Admin Dashboard:</strong> Developed a comprehensive admin panel for inventory management, order
                    processing, and sales analytics
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Technical Implementation:</h5>
                <ul>
                  <li>
                    <strong>⚛️ Frontend:</strong> Built with React.js, Redux for state management, and styled with CSS and Bootstrap
                  </li>
                  <li>
                    <strong>🖥️ Backend:</strong> Developed RESTful API using Node.js and Express.js
                  </li>
                  <li>
                    <strong>🗄️ Database:</strong> Utilized MongoDB for flexible data storage and Mongoose for object modeling
                  </li>
                  <li>
                    <strong>🔒 Security:</strong> Implemented input validation, data sanitization, and protection against common
                    web vulnerabilities
                  </li>
                  <li>
                    <strong>📱 Responsive Design:</strong> Ensured optimal user experience across all device sizes with responsive design principles
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Deployment:</h5>
                <ul>
                  <li>
                    <strong>🚀 Hosting:</strong> Deployed the application on Render for reliable and scalable hosting
                  </li>
                  <li>
                    <strong>🔄 CI/CD:</strong> Set up continuous integration and deployment pipeline for streamlined updates
                  </li>
                  <li>
                    <strong>📊 Performance:</strong> Optimized loading times and resource usage for better user experience
                  </li>
                </ul>
              </div>
              <div className="custom-modal-footer">
                <button className="custom-modal-btn custom-modal-btn-primary" onClick={handleCloseEcommerceModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* E-Alumni Project Modal */}
        {showEAlumniModal && (
          <div className="custom-modal-overlay" onClick={handleCloseEAlumniModal}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="custom-modal-header">
                <h3 className="custom-modal-title">🎓 E-Alumni: Alumni Management Platform</h3>
                <button className="custom-modal-close" onClick={handleCloseEAlumniModal}>×</button>
              </div>
              <div className="custom-modal-body">
                <p style={{ color: "#666" }}>Dec 2024 - Feb 2025</p>
                <p>
                  Developed a comprehensive alumni management platform that connects graduates with their alma mater and fellow alumni,
                  facilitating networking, mentorship, and continued engagement with the institution.
                </p>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Features:</h5>
                <ul>
                  <li>
                    <strong>👥 Alumni Directory:</strong> Created a searchable directory of alumni with filtering options by graduation year,
                    field of study, location, and industry
                  </li>
                  <li>
                    <strong>🗓️ Event Management:</strong> Implemented a system for organizing and promoting alumni events, reunions,
                    and networking opportunities
                  </li>
                  <li>
                    <strong>💼 Job Board:</strong> Developed a job posting and application system where alumni can share career
                    opportunities with fellow graduates
                  </li>
                  <li>
                    <strong>🔒 Secure Authentication:</strong> Implemented a robust authentication system with email verification
                    and profile management
                  </li>
                  <li>
                    <strong>📱 Responsive Design:</strong> Ensured the platform is accessible and functional across all device sizes
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Technical Implementation:</h5>
                <ul>
                  <li>
                    <strong>🖥️ Backend:</strong> Built with Node.js and Express.js for a robust server architecture
                  </li>
                  <li>
                    <strong>🗄️ Database:</strong> Utilized MongoDB for flexible data storage and Mongoose for object modeling
                  </li>
                  <li>
                    <strong>🎨 Frontend:</strong> Implemented with EJS templating engine for dynamic content rendering
                  </li>
                  <li>
                    <strong>📧 Email Integration:</strong> Integrated Nodemailer for automated email notifications and communications
                  </li>
                  <li>
                    <strong>🔐 Security:</strong> Implemented bcrypt for password hashing and JWT for secure authentication
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Impact:</h5>
                <p>
                  E-Alumni bridges the gap between educational institutions and their graduates, creating a vibrant community that benefits
                  both current students and alumni. The platform facilitates mentorship opportunities, professional networking, and continued
                  engagement with the institution, enhancing the value of the educational experience beyond graduation.
                </p>
              </div>
              <div className="custom-modal-footer">
                <button className="custom-modal-btn custom-modal-btn-primary" onClick={handleCloseEAlumniModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="row g-4 justify-content-center px-3" id="projects-list">
          {/* Farmer Assistant Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              borderRadius: "25px",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(102, 126, 234, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
            }}>
              <div className="position-relative" style={{ overflow: "hidden", height: "280px" }}>
                <div className="position-absolute w-100 h-100" style={{
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                  zIndex: 1
                }}></div>
                <span className="badge position-absolute top-0 end-0 m-3" style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  zIndex: "10",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
                }}>📱 Mobile App</span>
                <img src="farmer-assistant.png" alt="Farmer Assistant App" className="img-fluid w-100 h-100" style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15) rotate(2deg)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0deg)"} />
              </div>
              <div className="card-body p-4" style={{ background: "white" }}>
                <div className="mb-3">
                  <h5 className="fw-bold mb-2" style={{ 
                    color: "#1a202c",
                    fontSize: "1.25rem",
                    letterSpacing: "-0.5px"
                  }}>🌾 Farmer Assistant</h5>
                  <p className="text-muted mb-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                    <span style={{ color: "#667eea" }}>●</span> Apr 2025 - Present
                  </p>
                  <p className="text-secondary mb-3" style={{ 
                    fontSize: "0.9rem", 
                    lineHeight: "1.7",
                    color: "#4a5568"
                  }}>
                    Empowering farmers with digital tools for agricultural management, QR verification, and market insights.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {["React Native", "Expo", "Firebase", "Android"].map((tech, i) => (
                    <span key={i} className="badge" style={{
                      background: "linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%)",
                      color: "#667eea",
                      padding: "8px 14px",
                      borderRadius: "15px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      border: "1px solid rgba(102, 126, 234, 0.25)",
                      letterSpacing: "0.3px"
                    }}>{tech}</span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  <button className="btn flex-fill" onClick={handleShowFarmerModal} style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
                  }}>
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a className="btn flex-fill" href="https://farmer-assistant-web-black.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
                    background: "white",
                    color: "#667eea",
                    border: "2px solid #667eea",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#667eea";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    <FaExternalLinkAlt className="me-1" /> Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              borderRadius: "25px",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(245, 87, 108, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
            }}>
              <div className="position-relative" style={{ overflow: "hidden", height: "280px" }}>
                <div className="position-absolute w-100 h-100" style={{
                  background: "linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(245, 87, 108, 0.05) 100%)",
                  zIndex: 1
                }}></div>
                <span className="badge position-absolute top-0 end-0 m-3" style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  zIndex: "10",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 15px rgba(245, 87, 108, 0.4)"
                }}>🛒 MERN Stack</span>
                <img src="E-commerce.jpeg" alt="E-commerce application" className="img-fluid w-100 h-100" style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15) rotate(-2deg)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0deg)"} />
              </div>
              <div className="card-body p-4" style={{ background: "white" }}>
                <div className="mb-3">
                  <h5 className="fw-bold mb-2" style={{ 
                    color: "#1a202c",
                    fontSize: "1.25rem",
                    letterSpacing: "-0.5px"
                  }}>🛍️ E-commerce Platform</h5>
                  <p className="text-muted mb-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                    <span style={{ color: "#f5576c" }}>●</span> Jan 2025 - Mar 2025
                  </p>
                  <p className="text-secondary mb-3" style={{ 
                    fontSize: "0.9rem", 
                    lineHeight: "1.7",
                    color: "#4a5568"
                  }}>
                    Full-featured e-commerce platform with secure payments, cart system, and admin dashboard.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {["MongoDB", "Express", "React", "Node"].map((tech, i) => (
                    <span key={i} className="badge" style={{
                      background: "linear-gradient(135deg, rgba(240, 147, 251, 0.12) 0%, rgba(245, 87, 108, 0.12) 100%)",
                      color: "#f5576c",
                      padding: "8px 14px",
                      borderRadius: "15px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      border: "1px solid rgba(245, 87, 108, 0.25)",
                      letterSpacing: "0.3px"
                    }}>{tech}</span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  <button className="btn flex-fill" onClick={handleShowEcommerceModal} style={{
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(245, 87, 108, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(245, 87, 108, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(245, 87, 108, 0.3)";
                  }}>
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a className="btn flex-fill" href="https://ecommerce-app-frontend-44e8.onrender.com/" target="_blank" rel="noopener noreferrer" style={{
                    background: "white",
                    color: "#f5576c",
                    border: "2px solid #f5576c",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f5576c";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#f5576c";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    <FaExternalLinkAlt className="me-1" /> Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* E-Alumni Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0" style={{
              borderRadius: "25px",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 242, 254, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
            }}>
              <div className="position-relative" style={{ overflow: "hidden", height: "280px" }}>
                <div className="position-absolute w-100 h-100" style={{
                  background: "linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.05) 100%)",
                  zIndex: 1
                }}></div>
                <span className="badge position-absolute top-0 end-0 m-3" style={{
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  zIndex: "10",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 15px rgba(0, 242, 254, 0.4)"
                }}>🎓 Full Stack</span>
                <img src="E-alumni.png" alt="E-alumni project" className="img-fluid w-100 h-100" style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15) rotate(2deg)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0deg)"} />
              </div>
              <div className="card-body p-4" style={{ background: "white" }}>
                <div className="mb-3">
                  <h5 className="fw-bold mb-2" style={{ 
                    color: "#1a202c",
                    fontSize: "1.25rem",
                    letterSpacing: "-0.5px"
                  }}>🎓 E-Alumni Platform</h5>
                  <p className="text-muted mb-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                    <span style={{ color: "#00f2fe" }}>●</span> Dec 2024 - Feb 2025
                  </p>
                  <p className="text-secondary mb-3" style={{ 
                    fontSize: "0.9rem", 
                    lineHeight: "1.7",
                    color: "#4a5568"
                  }}>
                    Comprehensive platform connecting alumni with their alma mater and fellow graduates.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {["Node", "Express", "EJS", "MongoDB"].map((tech, i) => (
                    <span key={i} className="badge" style={{
                      background: "linear-gradient(135deg, rgba(79, 172, 254, 0.12) 0%, rgba(0, 242, 254, 0.12) 100%)",
                      color: "#00f2fe",
                      padding: "8px 14px",
                      borderRadius: "15px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      border: "1px solid rgba(0, 242, 254, 0.25)",
                      letterSpacing: "0.3px"
                    }}>{tech}</span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  <button className="btn" onClick={handleShowEAlumniModal} style={{
                    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    flex: "1",
                    boxShadow: "0 4px 15px rgba(0, 242, 254, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 242, 254, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 242, 254, 0.3)";
                  }}>
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a className="btn" href="https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp" target="_blank" rel="noopener noreferrer" style={{
                    background: "white",
                    color: "#00f2fe",
                    border: "2px solid #00f2fe",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    flex: "1",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#00f2fe";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#00f2fe";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    <FaExternalLinkAlt className="me-1" /> Demo
                  </a>
                  <a className="btn" href="https://github.com/Himanshu-vashist/E-Alumni" target="_blank" rel="noopener noreferrer" style={{
                    background: "white",
                    color: "#2d3748",
                    border: "2px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2d3748";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#2d3748";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    <FaGithub className="me-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5" style={{ display: "none" }}>
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">Full Stack</span>
                <img
                  src="WANDERLUST.jpeg"
                  alt="WanderLust project"
                  className="img-fluid"
                />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">Node</span>
                <span className="badge tech-badge">Express</span>
                <span className="badge tech-badge">MongoDB</span>
                <span className="badge tech-badge">EJS</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase">WanderLust</h5>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-primary mx-2"
                    href="https://wanderway-vbsg.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click To View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">Full Stack</span>
                <img
                  src="ToDo.jpeg"
                  alt="WanderLust project"
                  className="img-fluid"
                />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">MongoDB</span>
                <span className="badge tech-badge">Express</span>
                <span className="badge tech-badge">React</span>
                <span className="badge tech-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase"> To-Do List Application</h5>
                <div className="d-flex justify-content-center mt-3">

                <a
                    className="btn btn-primary mx-2"
                    href="https://to-do-task-dehi.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/To-Do-Task-9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">React</span>
                <img
                  src="student.jpeg"
                  alt="Todo App project"
                  className="img-fluid"
                />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">React</span>
                <span className="badge tech-badge">Redux</span>
                <span className="badge tech-badge">Tailwind css</span>

              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase">Student Management System</h5>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-primary mx-2"
                    href="https://student-management-portel-project-task-8.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/Student-Management-Portal-Project-Task-8-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">FRONTEND</span>
                <img
                  src="EDUCATION.jpeg"
                  alt="WanderLust project"
                  className="img-fluid"
                />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">HTML</span>
                <span className="badge tech-badge">CSS</span>
                <span className="badge tech-badge">JAVASCRIPT</span>
                <span className="badge tech-badge">BOOTSTRAP</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase">Responsive Web Design Project</h5>
                <div className="d-flex justify-content-center mt-3">

                <a
                    className="btn btn-primary mx-2"
                    href="https://himanshu-vashist.github.io/innomaticsInternshipTask5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/innomaticsInternshipTask5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;

