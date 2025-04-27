import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Certificates from "./pages/Certifications/Certifications";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/GlobalStyles.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="content-wrapper">
          <div className="container page-container">
            <About />
            <Education />
            <Techstack />
            <Projects />
            <WorkExp />
            <Certificates />
            <Contact />
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#ffffff"
        style={{
          backgroundColor: "#3b8ff3",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.3s ease"
        }}
      />
    </>
  );
}

export default App;
