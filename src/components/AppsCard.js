import React from "react";
import "./AppsCardStyles.css";
import { Link } from "react-router-dom";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const AppsCard = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Apps</h1>
        <p>
          Mediante los satélites de observación podemos disponer de información
          de origen espacial para numerosas aplicaciones sobre nuestro
          territorio continental y marítimo, a fin de mejorar la calidad de vida
          de la población. Los productos derivados de la información satelital
          también son fundamentales para los sectores económicos y productivos
          del país, para incrementar su productividad y competitividad a nivel
          nacional e internacional.
        </p>
        <Link to="/contact">
          <button className="btn">Ver Aplicaciones</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
