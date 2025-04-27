import React, { useState, useEffect } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Initialize content wrapper margin on component mount
  useEffect(() => {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper && toggle) {
      contentWrapper.style.marginLeft = '200px';
      contentWrapper.style.width = 'calc(100% - 200px)';
    }

    // Handle responsive layout
    const handleResize = () => {
      if (window.innerWidth <= 768 && contentWrapper) {
        contentWrapper.style.marginLeft = '0';
        contentWrapper.style.width = '100%';
      } else if (contentWrapper) {
        contentWrapper.style.marginLeft = toggle ? '200px' : '90px';
        contentWrapper.style.width = toggle ? 'calc(100% - 200px)' : 'calc(100% - 90px)';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, [toggle]);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
    // Update content wrapper class based on toggle state
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      if (!toggle) {
        contentWrapper.style.marginLeft = '200px';
        contentWrapper.style.width = 'calc(100% - 200px)';
      } else {
        contentWrapper.style.marginLeft = '90px';
        contentWrapper.style.width = 'calc(100% - 90px)';
      }
    }
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className={toggle ? "main-content sidebar-toggle-active" : "main-content"}>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
