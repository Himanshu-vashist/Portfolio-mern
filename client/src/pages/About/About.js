import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
// Import the image directly
import profileImage from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="about-container">
            <div className="about-img-container">
              {/* Image styling */}
              <img
                src={profileImage}
                alt="profile_pic"
                onError={(e) => {
                  console.error("Image failed to load");
                  // Use a fallback image from public directory if the imported image fails
                  e.target.src = process.env.PUBLIC_URL + '/logo512.png';
                }}
                className="about-profile-img"
              />
            </div>
            <div className="about-content">
              <h1 className="about-heading">ABOUT ME</h1>
              <p>
                I'm <strong>Himanshu Kumar</strong>, a versatile <strong>Full Stack Developer</strong> specializing in both web and mobile application development. As an Information Technology student at Heritage Institute of Technology, Kolkata, I combine technical expertise with creative problem-solving to build innovative digital solutions.

                💻 My technical toolkit spans the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) for web development and <strong>React Native with Expo</strong> for cross-platform mobile applications. I've developed a diverse portfolio of projects including educational gaming platforms, agricultural support applications, and e-commerce solutions.

                🚀 At <strong>Jabsz Gaming Studios LLP</strong>, I've honed my skills in mobile development, working with technologies like Firebase, Google Authentication, and AdMob integration. My experience includes building responsive interfaces, implementing secure authentication systems, and creating monetization strategies.

                🌱 I'm passionate about creating technology that makes a real difference in people's lives. Whether it's helping farmers with digital tools or making education more engaging through interactive games, I strive to develop applications that solve meaningful problems.

                🔍 I approach each project with meticulous attention to detail, a commitment to clean code, and a focus on creating intuitive user experiences. I'm constantly expanding my skillset, currently exploring TypeScript, cloud services, and advanced state management techniques.

                🤝 I thrive in collaborative environments and enjoy working with cross-functional teams to bring ideas to life. I'm always open to new challenges and opportunities to create impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
