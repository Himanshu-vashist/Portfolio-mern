import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title"> B.Tech</h3>

            <h4 className="vertical-timeline-element-subtitle">
              Heritage Institute Of Technology Kolkata
            </h4>
            <h5 className="vertical-timeline-element-title"> CGPA: 7.6</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Krishnanand Memorial Academy , Asharganj
            </h4>
            <h5 className="vertical-timeline-element-title"> Percentage: 82% </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
            DAV Public School, H.Kharagpur
            </h4>
            <h5 className="vertical-timeline-element-title"> Percentage: 92% </h5>
          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>
    </>
  );
};

export default Education;
