import React from "react";
import "./Module.css";

const ModuleWindow = ({ active, setActive, videoSrc }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="Video presentation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ModuleWindow;
