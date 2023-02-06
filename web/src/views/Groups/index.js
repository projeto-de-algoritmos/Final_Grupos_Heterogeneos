import "./styles.scss";
import GroupCard from "../../components/GroupCard";

const group = [
  ["member1", "member2", "member3"],
  ["member1", "member2", "member3"],
  [
    "member1",
    "member2",
    "member3",
    "member4",
    "member5",
    "member6",
    "member7",
    "member8",
    "member9",
  ],
];

export default function Groups(groups) {
  return (
    <div className="groups-container ">
      {group.map((group, index) => {
        return (
          <>
            <p className="title-team">Grupo {index + 1}</p>
            <GroupCard group={group} key={index} />
          </>
        );
      })}
    </div>
  );
}
