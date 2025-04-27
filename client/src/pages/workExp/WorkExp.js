import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jan 2025 - Present · 4 mos"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Jabsz Gaming Studios LLP · Remote
              </h4>
              <div className="work-exp-points">
                <div className="work-exp-point">
                  – Worked on web development projects utilizing React Hooks and various frontend technologies.
                </div>
                <div className="work-exp-point">
                  – Contributed to Android development initiatives, expanding mobile application capabilities.
                </div>
                <div className="work-exp-point">
                  – Collaborated with team members in a remote work environment to deliver high-quality solutions.
                </div>
                <div className="work-exp-point">
                  – Applied and enhanced skills in Android Development, React Hooks, and other web technologies.
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep 2024 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Innomatics Research Labs
              </h4>
              <div className="work-exp-points">
                <div className="work-exp-point">
                  – Created responsive web templates using front-end technologies, demonstrating UI/UX design skills.
                </div>
                <div className="work-exp-point">
                  – Developed React-powered student management dashboards with interactive components and data visualization.
                </div>
                <div className="work-exp-point">
                  – Built full-stack MERN applications, including e-commerce platform and todo application, showcasing end-to-end development capabilities.
                </div>
                <div className="work-exp-point">
                  – Collaborated with development team, contributing to code improvements and gaining agile development experience.
                </div>
              </div>
            </VerticalTimelineElement>


          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
