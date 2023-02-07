import React from "react";
import PersonCard from "../PersonCard";
import { useParams } from "react-router-dom";
import { saved } from "../../logic/graph";
import "./styles.scss";

function GroupView() {
  let { id } = useParams();
  return (
    <div className="view-group-container">
      {saved[id].map((person, index) => {
        return (
          <div className="view-person-card">
            <PersonCard key={index} person={person} />
          </div>
        );
      })}
    </div>
  );
}

export default GroupView;
