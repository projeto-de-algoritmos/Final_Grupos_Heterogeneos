import React from "react";
import "./styles.scss";

function PersonCard({ person }) {
  return (
    <div class="card text-center view-person-content">
      <div class="card-header">{person.name}</div>
      <div class="card-body view-person-body">
        <p class="card-text">
          Idiomas: {person.characteristics.idiom.join(", ")}
        </p>
        <p class="card-text">
          Linguagens: {person.characteristics.languages.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;
