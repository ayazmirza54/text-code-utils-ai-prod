import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero my-14 overflow-hidden">
      <div className="hero-content flex-col sm:flex-row items-center justify-center">
        <img
          src="../../src/assets/ai-hero-pic.png"
          className="rounded-xl shadow-lg"
        />
        <div className="sm:ml-10 content">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mx-4 sm:mx-20">
            Free AI-Powered Tools for Students
          </h2>
          <p className="py-4 sm:py-6 font-mono mx-4 sm:mx-20 text-base sm:text-lg overflow-hidden">
            Save your time and brain energy by leveraging the power of
            Artificial Intelligence to automate tasks like generating study
            notes of any topic, extracting important points from any paragraph,
            generating questions in seconds and much more for free by using the
            tools offered by AI Text Tools.
          </p>
        <Link to="/tools">
            <button className="mx-4 sm:mx-20 btn-grad">
              <FaTools className="mx-2 inline" />
              Browse tools
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
