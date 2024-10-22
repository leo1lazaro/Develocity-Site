import React from "react";
import "./cardtime.css";

const CardTime = (props) => {
  return (
    <div className="card-time">
      <div className="card-time-img">
        <img src={props.foto} alt="Imagem do membro da equipe" />
      </div>
      <div className="card-time-textos">
        <div className="card-time-textos-principal">
          <h4>{props.nome}</h4>
          <span>{props.cargo}</span>
        </div>
        <div className="card-time-textos-descricao">
          <p>{props.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTime;
