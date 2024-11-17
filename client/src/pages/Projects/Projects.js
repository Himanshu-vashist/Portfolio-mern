import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const image = "https://imgs.search.brave.com/QjXu8zANpU851oeu6jsV48OEhTPvi1ZkUvE1bmw9CCA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbHVt/bmkudHVsYW5lLmVk/dS9zLzE1ODYvaW1h/Z2VzL2NvbnRlbnRf/aW1hZ2VzLzIwMjJ3/ZWJfNjM3OTAyMTE0/NDA3OTc1NDU4Lmpw/Zw"; 


const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={image}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">EJS</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    E - alumni: your one- stop solution for all alumni needs!
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://youtu.be/6ZiIxATHFQA?si=TpY9mLB7fQTOobLp"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Himanshu-vashist/E-Alumni"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://imgs.search.brave.com/YkneyiUY6FdXXVGYz1l5xQkG_p8mEngwFkGBt2_VT8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2Rlcm4tdHJh/dmVsLXdlYnNpdGUt/ZGVzaWduXzEwMjAy/MDAtMjAxNzMuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>

                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">EJS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                    WanderLust</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Himanshu-vashist/WanderWay"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img
                    src="https://imgs.search.brave.com/q8RERfASavBa8T7oc4ZItaKcnclItDdEUlXyXrxbSN4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/ODkyODA1OC9maWxl/L29yaWdpbmFsLWMy/NzQxOTNjY2YzMmJk/YzMyZmQ2NjM5ZWU4/NWM2NGY4LmpwZz9y/ZXNpemU9NDAweDA"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Todo App</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Himanshu-vashist/To-Do-Task-9">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
