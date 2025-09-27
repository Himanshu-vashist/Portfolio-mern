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
      {/* Featured Project Section */}
      <div className="container-fluid featured-project-section position-relative overflow-hidden" style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #f5576c 100%)", 
        color: "white", 
        padding: "80px 0",
        marginBottom: "50px",
        minHeight: "100vh"
      }}>
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.15 }}>
          <div className="position-absolute" style={{ 
            top: "10%", 
            left: "10%", 
            width: "120px", 
            height: "120px", 
            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)", 
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
          }}></div>
          <div className="position-absolute" style={{ 
            top: "70%", 
            right: "15%", 
            width: "180px", 
            height: "180px", 
            background: "linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 100%)", 
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
            boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)"
          }}></div>
          <div className="position-absolute" style={{ 
            bottom: "20%", 
            left: "5%", 
            width: "100px", 
            height: "100px", 
            background: "linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(248, 113, 113, 0.2) 100%)", 
            borderRadius: "50%",
            animation: "float 10s ease-in-out infinite",
            boxShadow: "0 0 25px rgba(245, 158, 11, 0.3)"
          }}></div>
          <div className="position-absolute" style={{ 
            top: "40%", 
            right: "5%", 
            width: "90px", 
            height: "90px", 
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(16, 185, 129, 0.15) 100%)", 
            borderRadius: "50%",
            animation: "float 12s ease-in-out infinite",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.25)"
          }}></div>
        </div>

        <div className="container position-relative">
          {/* Header Section */}
          <div className="text-center mb-5" style={{ paddingTop: "20px" }}>
            <div className="mb-4">
              <span className="badge px-4 py-2 mb-3 border border-warning text-warning" style={{ 
                fontSize: "1.1rem", 
                background: "rgba(255,193,7,0.1)",
                borderRadius: "25px",
                backdropFilter: "blur(10px)"
              }}>
                ⭐ FEATURED PROJECT
              </span>
            </div>
            
            <div className="mb-4" style={{ animation: "slideInUp 1s ease-out" }}>
              <h1 className="display-2 fw-bold mb-3" style={{ 
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                background: "linear-gradient(45deg, #fff, #f8f9fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                📱 Knowledge Bubble
              </h1>
              <h3 className="mb-4 fw-light" style={{ opacity: 0.9 }}>Educational Mobile Learning Platform</h3>
            </div>
            
            <div className="row justify-content-center mb-4">
              <div className="col-lg-10">
                <div className="card border-0 kb-featured-card" style={{ 
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%) !important", 
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white !important"
                }}>
                  <div className="card-body p-4">
                    <p className="lead mb-3" style={{ fontSize: "1.3rem", lineHeight: "1.6", color: "white !important" }}>
                      A comprehensive educational mobile application that makes learning engaging and interactive for users of all ages.
                    </p>
                    <div className="d-inline-flex align-items-center px-4 py-2 rounded-pill kb-success-badge" style={{ 
                      background: "linear-gradient(135deg, rgba(40, 167, 69, 0.25) 0%, rgba(34, 197, 94, 0.15) 100%) !important", 
                      border: "2px solid rgba(40, 167, 69, 0.4)",
                      backdropFilter: "blur(10px)",
                      color: "white !important"
                    }}>
                      <span className="fw-bold" style={{ color: "white !important" }}>🎉 Successfully launched Version 1.0 on Google Play Store!</span>
                    </div>
                    <div className="mt-2">
                      <span className="badge px-3 py-2 kb-dev-badge" style={{ 
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%) !important",
                        borderRadius: "15px",
                        border: "1px solid rgba(59, 130, 246, 0.4)",
                        color: "white !important"
                      }}>
                        🚀 Currently leading development to Version 2.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="row align-items-center g-5">
            {/* Image Section */}
            <div className="col-lg-6 mb-4">
              <div className="position-relative" style={{ animation: "fadeInLeft 1s ease-out" }}>
                <div className="card border-0" style={{ 
                  background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(255,255,255,0.05) 100%)", 
                  backdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 20px 60px rgba(99, 102, 241, 0.2)"
                }}>
                  <div className="position-relative p-4">
                    <img 
                      src="knowledge-bubble.png" 
                      alt="Knowledge Bubble App"
                      className="img-fluid rounded shadow-lg"
                      style={{ 
                        maxHeight: "500px", 
                        objectFit: "contain", 
                        width: "100%",
                        borderRadius: "20px"
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-4">
                      <span className="badge bg-success px-3 py-2 shadow" style={{ 
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                        animation: "pulse 2s infinite"
                      }}>
                        🟢 Live on Play Store
                      </span>
                    </div>
                    
                    {/* Floating stats */}
                    <div className="position-absolute bottom-0 start-0 m-4">
                      <div className="d-flex gap-2">
                        <div className="badge bg-primary px-3 py-2" style={{ borderRadius: "12px" }}>
                          📚 10+ Chapters
                        </div>
                        <div className="badge bg-warning text-dark px-3 py-2" style={{ borderRadius: "12px" }}>
                          ⭐ 4.8+ Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="col-lg-6">
              <div style={{ animation: "fadeInRight 1s ease-out" }}>
                {/* Project Info Cards */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="card border-0 h-100 kb-info-card" style={{ 
                      background: "linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 193, 7, 0.05) 100%) !important", 
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 193, 7, 0.3)",
                      color: "white !important"
                    }}>
                      <div className="card-body p-3 text-center">
                        <h6 className="text-warning mb-1" style={{ color: "#ffc107 !important" }}>👨‍💻 Role</h6>
                        <p className="mb-0 fw-bold" style={{ color: "white !important" }}>Technical Lead</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 h-100 kb-info-card" style={{ 
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 100%) !important", 
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      color: "white !important"
                    }}>
                      <div className="card-body p-3 text-center">
                        <h6 className="text-info mb-1" style={{ color: "#0dcaf0 !important" }}>📅 Duration</h6>
                        <p className="mb-0 fw-bold" style={{ color: "white !important" }}>Feb 2025 - Present</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 h-100 kb-info-card" style={{ 
                      background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.05) 100%) !important", 
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      color: "white !important"
                    }}>
                      <div className="card-body p-3 text-center">
                        <h6 className="text-success mb-1" style={{ color: "#198754 !important" }}>🏢 Company</h6>
                        <p className="mb-0 fw-bold" style={{ color: "white !important" }}>Jabsz Studios</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 h-100 kb-info-card" style={{ 
                      background: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0.05) 100%) !important", 
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(147, 51, 234, 0.3)",
                      color: "white !important"
                    }}>
                      <div className="card-body p-3 text-center">
                        <h6 className="text-light mb-1" style={{ color: "white !important" }}>📊 Status</h6>
                        <div>
                          <span className="badge bg-success me-1" style={{ fontSize: "0.7rem", backgroundColor: "#198754 !important" }}>V1.0</span>
                          <span className="badge bg-info" style={{ fontSize: "0.7rem", backgroundColor: "#0dcaf0 !important" }}>V2.0 Dev</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="card border-0 mb-4 kb-features-card" style={{ 
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%) !important", 
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  color: "white !important"
                }}>
                  <div className="card-body p-4">
                    <h5 className="mb-3 text-warning" style={{ color: "#ffc107 !important" }}>🌟 Key Features</h5>
                    <div className="row g-2">
                      <div className="col-12">
                        <div className="d-flex align-items-center mb-2 p-3 rounded kb-feature-item" style={{ 
                          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%) !important",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                          color: "white !important"
                        }}>
                          <span className="me-3">📚</span>
                          <span style={{ color: "white !important" }}>Interactive Chapter System with 10+ educational topics</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center mb-2 p-3 rounded kb-feature-item" style={{ 
                          background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%) !important",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                          color: "white !important"
                        }}>
                          <span className="me-3">🎮</span>
                          <span style={{ color: "white !important" }}>Gamified Learning with star-based progression</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center mb-2 p-3 rounded kb-feature-item" style={{ 
                          background: "linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.05) 100%) !important",
                          border: "1px solid rgba(147, 51, 234, 0.2)",
                          color: "white !important"
                        }}>
                          <span className="me-3">📱</span>
                          <span style={{ color: "white !important" }}>Multi-Platform Support (iOS & Android)</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center mb-2 p-3 rounded kb-feature-item" style={{ 
                          background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 100%) !important",
                          border: "1px solid rgba(236, 72, 153, 0.2)",
                          color: "white !important"
                        }}>
                          <span className="me-3">🎨</span>
                          <span style={{ color: "white !important" }}>Rich Media Integration with interactive puzzles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="mb-3 text-info" style={{ color: "#0dcaf0 !important" }}>⚡ Technologies</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {["React Native", "TypeScript", "Firebase", "Android Studio", "Xcode"].map((tech, index) => (
                      <span key={index} className="badge px-3 py-2 kb-tech-badge" style={{ 
                        background: `linear-gradient(135deg, ${[
                          "rgba(59, 130, 246, 0.25)",
                          "rgba(34, 197, 94, 0.25)", 
                          "rgba(245, 158, 11, 0.25)",
                          "rgba(236, 72, 153, 0.25)",
                          "rgba(147, 51, 234, 0.25)"
                        ][index]} 0%, ${[
                          "rgba(59, 130, 246, 0.1)",
                          "rgba(34, 197, 94, 0.1)", 
                          "rgba(245, 158, 11, 0.1)",
                          "rgba(236, 72, 153, 0.1)",
                          "rgba(147, 51, 234, 0.1)"
                        ][index]} 100%) !important`, 
                        color: "white !important",
                        borderRadius: "15px",
                        border: `1px solid ${[
                          "rgba(59, 130, 246, 0.4)",
                          "rgba(34, 197, 94, 0.4)", 
                          "rgba(245, 158, 11, 0.4)",
                          "rgba(236, 72, 153, 0.4)",
                          "rgba(147, 51, 234, 0.4)"
                        ][index]}`,
                        animation: `fadeInUp ${0.5 + index * 0.1}s ease-out`,
                        backdropFilter: "blur(5px)"
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.JabszGamingStudios.KnowledgeBubble&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg px-4 py-3 position-relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(45deg, #28a745, #20c997)",
                      border: "none",
                      borderRadius: "25px",
                      color: "white",
                      boxShadow: "0 8px 25px rgba(40, 167, 69, 0.3)",
                      transition: "all 0.3s ease",
                      fontWeight: "600"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 12px 35px rgba(40, 167, 69, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 8px 25px rgba(40, 167, 69, 0.3)";
                    }}
                  >
                    <FaPlay className="me-2" />
                    Play Store
                  </a>
                  
                  <button 
                    className="btn btn-lg px-4 py-3"
                    onClick={handleShowKnowledgeModal}
                    style={{ 
                      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)",
                      border: "2px solid rgba(99, 102, 241, 0.4)",
                      borderRadius: "25px",
                      color: "white",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      fontWeight: "600",
                      boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(147, 51, 234, 0.3) 100%)";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 12px 35px rgba(99, 102, 241, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 8px 25px rgba(99, 102, 241, 0.3)";
                    }}
                  >
                    <FaInfoCircle className="me-2" />
                    View Details
                  </button>
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
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Other Notable Projects
        </h2>
        <hr />

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
                <div style={{ background: "#e8f5e8", padding: "10px", borderRadius: "8px", marginBottom: "15px", border: "1px solid #4caf50" }}>
                  <p style={{ color: "#2e7d32", fontWeight: "bold", margin: "0" }}>
                    🎉 Successfully launched Version 1.0 on Google Play Store! Currently leading development to Version 2.0
                  </p>
                </div>
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

        <div className="row" id="projects-list">
          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">Mobile App</span>
                <img src="farmer-assistant.png" alt="Farmer Assistant App" className="img-fluid" />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">React Native</span>
                <span className="badge tech-badge">Expo</span>
                <span className="badge tech-badge">Firebase</span>
                <span className="badge tech-badge">Android Development</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">🌾 Farmer Assistant - Mobile App</h6>
                <p className="small text-muted mb-2">Apr 2025 - Present</p>
                <p className="small mb-3">A comprehensive mobile application designed to empower farmers with digital tools for agricultural management and decision-making.</p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handleShowFarmerModal}
                  >
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://farmer-assistant-web-black.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-1" /> View Live
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">MERN Stack</span>
                <img src="E-commerce.jpeg" alt="E-commerce application" className="img-fluid" />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">MongoDB</span>
                <span className="badge tech-badge">Express</span>
                <span className="badge tech-badge">React</span>
                <span className="badge tech-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">🛒 E-commerce Application</h6>
                <p className="small text-muted mb-2">Jan 2025 - Mar 2025</p>
                <p className="small mb-3">A full-featured e-commerce platform with product search, shopping cart, and secure payment processing.</p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handleShowEcommerceModal}
                  >
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://ecommerce-app-frontend-44e8.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-1" /> View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card rounded shadow-sm">
              <div className="card-image">
                <span className="badge project-type">Full Stack</span>
                <img src="E-alumni.png" alt="E-alumni project" className="img-fluid" />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">Node</span>
                <span className="badge tech-badge">Express</span>
                <span className="badge tech-badge">EJS</span>
                <span className="badge tech-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">🎓 E-Alumni: Alumni Management Platform</h6>
                <p className="small text-muted mb-2">Dec 2024 - Feb 2025</p>
                <p className="small mb-3">A comprehensive platform connecting alumni with their alma mater and fellow graduates.</p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handleShowEAlumniModal}
                  >
                    <FaInfoCircle className="me-1" /> Details
                  </button>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-1" /> Demo
                  </a>
                  <a
                    className="btn btn-outline-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/E-Alumni"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="me-1" /> GitHub
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

