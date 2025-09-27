import React from "react";
import { motion } from "framer-motion";

const AnimationWrapper = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  className = "",
  ...props 
}) => {
  const getVariants = () => {
    const directions = {
      up: { y: 50, opacity: 0 },
      down: { y: -50, opacity: 0 },
      left: { x: -50, opacity: 0 },
      right: { x: 50, opacity: 0 },
      bottom: { y: 50, opacity: 0 },
      zoom: { scale: 0.8, opacity: 0 },
      jump: { y: -30, opacity: 0 },
      rubberBand: { scale: 0.8, opacity: 0 }
    };

    return {
      hidden: directions[direction] || directions.up,
      visible: {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Specific animation components for easier migration
export const Fade = ({ children, left, right, bottom, delay, ...props }) => {
  let direction = "up";
  if (left) direction = "left";
  if (right) direction = "right";
  if (bottom) direction = "bottom";
  
  return (
    <AnimationWrapper direction={direction} delay={delay} {...props}>
      {children}
    </AnimationWrapper>
  );
};

export const Zoom = ({ children, delay, ...props }) => (
  <AnimationWrapper direction="zoom" delay={delay} {...props}>
    {children}
  </AnimationWrapper>
);

export const Jump = ({ children, delay, ...props }) => (
  <AnimationWrapper direction="jump" delay={delay} {...props}>
    {children}
  </AnimationWrapper>
);

export const RubberBand = ({ children, delay, ...props }) => (
  <AnimationWrapper direction="rubberBand" delay={delay} {...props}>
    {children}
  </AnimationWrapper>
);

export default AnimationWrapper;