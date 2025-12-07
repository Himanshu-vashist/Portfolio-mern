import React, { useState } from "react";
import "./Feedback.css";
import { Fade } from "../../components/Animation/AnimationWrapper";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbackData = [
    {
      id: 1,
      image: "/Feedback/1.png",
      name: "Client Feedback 1",
    },
    {
      id: 2,
      image: "/Feedback/2.png",
      name: "Client Feedback 2",
    },
    {
      id: 3,
      image: "/Feedback/3.png",
      name: "Client Feedback 3",
    },
    {
      id: 4,
      image: "/Feedback/4.png",
      name: "Client Feedback 4",
    },
    {
      id: 5,
      image: "/Feedback/5.png",
      name: "Client Feedback 5",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="feedback-section" id="feedback">
      <Fade bottom>
        <div className="feedback-container">
          <h2 className="feedback-heading">Client Feedback</h2>
          <p className="feedback-subtitle">
            What my clients say about working with me
          </p>

          <div className="feedback-carousel">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <div className="feedback-content">
              <div className="feedback-image-container">
                <img
                  src={feedbackData[currentIndex].image}
                  alt={feedbackData[currentIndex].name}
                  className="feedback-image"
                />
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>

          <div className="carousel-indicators">
            {feedbackData.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <div className="feedback-counter">
            {currentIndex + 1} / {feedbackData.length}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Feedback;
