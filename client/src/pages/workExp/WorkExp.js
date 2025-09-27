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
          <p className="text-center" style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            <strong>Total Experience: 12+ months</strong> | Mobile Development & Full-Stack  
          </p>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jan 2025 - Present · 9 mos"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer (Intern → Full-time)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Jabsz Studios · Gurugram, Haryana, India · Remote
              </h4>
              <div className="work-exp-points">
                <div className="work-exp-point">
                  – <strong>Team Lead</strong> for Knowledge Bubble 🎮 — an innovative multi-game mobile app developed with React Native and Firebase.
                </div>
                <div className="work-exp-point">
                  – Progressed from Intern (Jan-Mar 2025) to Full-time Web Developer (Apr 2025-Present), demonstrating rapid career growth.
                </div>
                <div className="work-exp-point">
                  – Built and launched a cross-platform multi-game app featuring 10+ games on the Google Play Store.
                </div>
                <div className="work-exp-point">
                  – Successfully deployed Version 1 and currently leading Version 2 development with enhanced features.
                </div>
                <div className="work-exp-point">
                  – Managed full-stack architecture, in-app advertisements, sound effects, and complete Play Store release cycle.
                </div>
                <div className="work-exp-point">
                  – Improved company website by identifying and resolving critical UX and functionality issues.
                </div>
                <div className="work-exp-point">
                  – <strong>Key Technologies:</strong> React Native, Firebase, Android Development, React Hooks, Cross-platform Development
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep 2024 - Nov 2024"
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
