// src/ProgressBar.js
import { useState, useEffect } from "react";
import "./App.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress === 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 1000);
    } 
    else {
      setStatus("Complete!");
    }
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-status">{status}</div>
    </div>
  );
};

export default ProgressBar;
