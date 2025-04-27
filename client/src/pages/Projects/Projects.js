// import React from "react";
// import "./Projects.css";
// import Spin from "react-reveal/Spin";
// //const image = "https://imgs.search.brave.com/QjXu8zANpU851oeu6jsV48OEhTPvi1ZkUvE1bmw9CCA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbHVt/bmkudHVsYW5lLmVk/dS9zLzE1ODYvaW1h/Z2VzL2NvbnRlbnRf/aW1hZ2VzLzIwMjJ3/ZWJfNjM3OTAyMTE0/NDA3OTc1NDU4Lmpw/Zw";


// const Projects = () => {
//   return (
//     <>
//       <div className="continer project" id="projects">
//         <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//           TOP RECENT PROJECTS
//         </h2>
//         <hr />

//         {/* card design */}
//         <div className="row" id="ads">
//           <Spin>
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <span className="card-notify-badge">Full stack</span>
//                   <img src="E-alumni.png" alt="description" />

//                 </div>
//                 <div className="card-image-overly m-auto mt-3">
//                   <span className="card-detail-badge">Node</span>
//                   <span className="card-detail-badge">Express</span>
//                   <span className="card-detail-badge">EJS</span>
//                   <span className="card-detail-badge">Mongodb</span>
//                 </div>
//                 <div className="card-body text-center">
//                   <div className="ad-title m-auto">
//                     <h6 className="text-uppercase">
//                     E - alumni: your one- stop solution for all alumni needs!
//                     </h6>
//                   </div>
//                   <a
//                     className="ad-btn"
//                     href="https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp"
//                   >
//                     View
//                   </a>
//                   <a
//                     className="ad-btn"
//                     href="https://github.com/Himanshu-vashist/E-Alumni"
//                   >
//                     Github
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <span className="card-notify-badge">Full stack</span>
//                   <img
//                     src="https://imgs.search.brave.com/YkneyiUY6FdXXVGYz1l5xQkG_p8mEngwFkGBt2_VT8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2Rlcm4tdHJh/dmVsLXdlYnNpdGUt/ZGVzaWduXzEwMjAy/MDAtMjAxNzMuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
//                     alt="project2"
//                   />
//                 </div>
//                 <div className="card-image-overly m-auto mt-3">
//                   <span className="card-detail-badge">Node</span>

//                   <span className="card-detail-badge">Express</span>
//                   <span className="card-detail-badge">Mongodb</span>
//                   <span className="card-detail-badge">EJS</span>
//                 </div>
//                 <div className="card-body text-center">
//                   <div className="ad-title m-auto">
//                     <h5 className="text-uppercase">
//                     WanderLust</h5>
//                   </div>
//                   <a
//                     className="ad-btn"
//                     href="https://github.com/Himanshu-vashist/WanderWay"
//                   >
//                     View
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <span className="card-notify-badge">MERN</span>
//                   <img
//                     src="https://imgs.search.brave.com/q8RERfASavBa8T7oc4ZItaKcnclItDdEUlXyXrxbSN4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/ODkyODA1OC9maWxl/L29yaWdpbmFsLWMy/NzQxOTNjY2YzMmJk/YzMyZmQ2NjM5ZWU4/NWM2NGY4LmpwZz9y/ZXNpemU9NDAweDA"
//                     alt="project1"
//                   />
//                 </div>
//                 <div className="card-image-overly m-auto mt-3">
//                   <span className="card-detail-badge">Node</span>
//                   <span className="card-detail-badge">Express</span>

//                   <span className="card-detail-badge">React</span>
//                   <span className="card-detail-badge">Mongodb</span>
//                 </div>
//                 <div className="card-body text-center">
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

const Projects = () => {
  const [showFarmerModal, setShowFarmerModal] = useState(false);
  const [showKnowledgeModal, setShowKnowledgeModal] = useState(false);

  const handleCloseFarmerModal = () => setShowFarmerModal(false);
  const handleShowFarmerModal = () => setShowFarmerModal(true);

  const handleCloseKnowledgeModal = () => setShowKnowledgeModal(false);
  const handleShowKnowledgeModal = () => setShowKnowledgeModal(true);

  return (
    <>
      <div className="container project-section" id="projects">
        <h2 className="col-12 mt-3 mb-1  text-center text-uppercase">
          Top Recent Projects
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
                <h3 className="custom-modal-title">🎮 KnowledgeBubble - Gaming Platform</h3>
                <button className="custom-modal-close" onClick={handleCloseKnowledgeModal}>×</button>
              </div>
              <div className="custom-modal-body">
                <p style={{ color: "#666" }}>Feb 2025 - Present • Associated with Jabsz Gaming Studios LLP</p>
                <p>
                  Developed a cross-platform educational gaming application that combines learning with entertainment,
                  making education more engaging and accessible through interactive gameplay.
                </p>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Key Features:</h5>
                <ul>
                  <li>
                    <strong>🎲 Multiple Interactive Games:</strong> Implemented various educational games including Quiz,
                    Mega Tic-Tac-Toe, Tower of Hanoi, Checkers, and LetterQuest
                  </li>
                  <li>
                    <strong>🔐 Secure Authentication:</strong> Created a robust authentication system with multiple sign-in options
                    (Email, Google, Apple) for enhanced user convenience and security
                  </li>
                  <li>
                    <strong>🏆 Real-time Leaderboard:</strong> Developed a dynamic leaderboard system that tracks player
                    performance across different games, fostering healthy competition
                  </li>
                  <li>
                    <strong>📱 Cross-platform Compatibility:</strong> Ensured seamless experience across iOS, Android, and Web
                    platforms using React Native and Expo
                  </li>
                  <li>
                    <strong>💰 Monetization:</strong> Integrated Google Mobile Ads for sustainable revenue generation while
                    maintaining positive user experience
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Technical Implementation:</h5>
                <ul>
                  <li>
                    <strong>⚛️ Frontend:</strong> Built with React Native and Expo for cross-platform development
                  </li>
                  <li>
                    <strong>📝 TypeScript:</strong> Utilized TypeScript for type safety and improved code quality
                  </li>
                  <li>
                    <strong>🔥 Backend:</strong> Implemented Firebase for user management, authentication, and data persistence
                  </li>
                  <li>
                    <strong>🔄 State Management:</strong> Used Redux for efficient state management across the application
                  </li>
                  <li>
                    <strong>🎨 UI/UX:</strong> Created an engaging and intuitive user interface with custom animations and responsive design
                  </li>
                </ul>

                <h5 style={{ marginTop: "1.5rem", color: "#3b8ff3" }}>Impact:</h5>
                <p>
                  KnowledgeBubble transforms traditional learning into an engaging, game-based experience that appeals to users of all ages.
                  By combining educational content with entertaining gameplay mechanics, the platform makes learning more accessible and enjoyable,
                  helping users retain information more effectively while having fun.
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
                    Details
                  </button>
                  <a
                    className="btn btn-secondary mx-2"
                    href="#"
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
                <span className="badge project-type">Gaming Platform</span>
                <img src="knowledge-bubble.png" alt="KnowledgeBubble Gaming Platform" className="img-fluid" />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">React Native</span>
                <span className="badge tech-badge">TypeScript</span>
                <span className="badge tech-badge">Firebase</span>
                <span className="badge tech-badge">Expo</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">🎮 KnowledgeBubble - Gaming Platform</h6>
                <p className="small text-muted mb-2">Feb 2025 - Present</p>
                <p className="small mb-3">A cross-platform educational gaming application that combines learning with entertainment through interactive games.</p>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handleShowKnowledgeModal}
                  >
                    Details
                  </button>
                  <a
                    className="btn btn-secondary mx-2"
                    href="#"
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
                <span className="badge project-type">MERN Stack</span>
                <img src="E-commerce.jpeg" alt="E-alumni project" className="img-fluid" />
              </div>
              <div className="tech-stack text-center mt-3">
                <span className="badge tech-badge">MongoDB</span>
                <span className="badge tech-badge">Express</span>
                <span className="badge tech-badge">React</span>
                <span className="badge tech-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">E-commerce application</h6>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-primary mx-2"
                    href="https://ecommerce-mern-utjs.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/Ecommerce-mern"
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
                <h6 className="text-uppercase">E-Alumni: Your One-Stop Solution for Alumni Needs!</h6>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-primary mx-2"
                    href="https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-secondary mx-2"
                    href="https://github.com/Himanshu-vashist/E-Alumni"
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
                    href="https://github.com/Himanshu-vashist/WanderWay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
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

