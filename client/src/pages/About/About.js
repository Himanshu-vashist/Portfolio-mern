import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="11.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                              I’m Himanshu Kumar, a Full Stack Developer (MERN Stack), Open Source Enthusiast, and Passionate Web Developer. As an Information Technology student at Heritage Institute of Technology, Kolkata, I’m driven by a deep passion to solve real-world challenges.

                💻 My core expertise lies in building scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). With a strong foundation in full-stack development, I enjoy crafting intuitive, dynamic user experiences and robust backend systems. I am constantly learning and growing, pushing the boundaries of my skills with a “get-it-done” mindset.

                🌟 I'm an active contributor to the open-source community and passionate about creating impactful digital solutions. I love collaborating with others and sharing knowledge through my projects and contributions.

              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
