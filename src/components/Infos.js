import React from "react";
import { Link } from "react-router-dom";
import "./InfoStyles.css";

const Info = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Misiones -</h3>
          <span className="bar"></span>
          <p className="btc">Satelites</p>
          <p>- SAC-A -</p>
          <p>- SAC-C -</p>
          <p>- SAC-D/Aquarius -</p>
          <p>- SAC-B -</p>
          <Link to="/contact" className="btn">
            Mas Info
          </Link>
        </div>
        <div className="card">
          <h3>- Plan Espacial -</h3>
          <span className="bar"></span>
          <p className="btc">Objetivos</p>
          <p>- Observación de la Tierra -</p>
          <p>- Exploración -</p>
          <p>- Desarrollos tecnológicos -</p>
          <p>- utilización pacífica del espacio ultraterrestre -</p>
          <Link to="/contact" className="btn">
            Mas Info
          </Link>
        </div>
        <div className="card">
          <h3>- Productos -</h3>
          <span className="bar"></span>
          <p className="btc">Busquedas</p>
          <p>- Catalogo de imagenes -</p>
          <p>- Productos derivados -</p>
          <p>- Mapas -</p>
          <p>- Geo Servicios -</p>
          <Link to="/contact" className="btn">
            Mas Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
