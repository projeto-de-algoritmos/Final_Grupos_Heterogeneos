import React from "react";
import PersonCard from "../PersonCard";

import "./styles.scss";

const t = [
  {
    name: "test",
    characteristics: {
      idiom: "Inglês",
      languages: "JavaScript",
      knowledge: "Iniciante",
    },
    related: ["test1", "test2"],
  },
  {
    name: "test1",
    characteristics: {
      idiom: "Inglês",
      languages: "TypeScript",
      knowledge: "Junior",
    },
    related: ["test", "test2"],
  },
  {
    name: "test2",
    characteristics: {
      idiom: "Inglês",
      languages: "C",
      knowledge: "Junior",
    },
    related: ["test", "test1"],
  },
];
function GroupView({ group }) {
  return (
    <div className="view-group-container">
      {t.map((person, index) => {
        return (
          <PersonCard
            className="view-person-card"
            key={index}
            person={person}
          />
        );
      })}
    </div>
  );
}

export default GroupView;
