import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const buttonRef = useRef(null);
  const animationFrameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    animationFrameRef.current = requestAnimationFrame(() => {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();

      // Calculate mouse position relative to the button
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate the diagonal length of the button
      const diameter = Math.sqrt(rect.width ** 2 + rect.height ** 2);

      // Set CSS variables for position and size
      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
      button.style.setProperty("--diameter", `${diameter * 2}px`);
    });
  };

  return (
    <div className="homeWrapper">
      <Navbar />
      <div className="home-content">
        <div className="landing-page">
          <div className="left">
            <div className="motto">
              <h1 id="motto">building the future, one innovation at a time</h1>
            </div>
            <div className="cta-landing">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  ref={buttonRef}
                  onMouseMove={handleMouseMove}
                  className="blob-button"
                >
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="video"></div>
            <div className="social-media"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
