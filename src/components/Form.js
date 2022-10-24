import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Nombre y Apellido</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Asunto</label>
        <input type="text"></input>
        <label>Detalles</label>
        <textarea rows="6" placeholder="Escriba su mensaje" />
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
