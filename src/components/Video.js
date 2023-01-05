import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Orion Argentina</h1>
        <p>Agencia de vuelo espacial Argentina</p>
        <div>
          <Link to="/" className="btn">
            Proyectos
          </Link>
          <Link to="/" className="btn btn-light">
            Objetivos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
