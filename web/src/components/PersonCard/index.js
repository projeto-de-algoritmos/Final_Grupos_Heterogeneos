import React from "react";
import "./styles.scss";

// import { Container } from './styles';

function PersonCard({ person }) {
  return (
    <>
      <p>{person.name}</p>
      <div className="view-person-container">
        <p>Idioma: {person.characteristics.idiom}</p>
        <p>Linguagem: {person.characteristics.languages}</p>
        <p>Nivel de conhecimento: {person.characteristics.knowledge}</p>
      </div>
    </>
  );
}

export default PersonCard;
