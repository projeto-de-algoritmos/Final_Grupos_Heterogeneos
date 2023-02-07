import "./styles.scss";
import person from "../../assets/person.png";

export default function GroupCard({ group }) {
  return (
    <div className="group-card">
      {group.map((member, index) => {
        return (
          <div key={index} className="member-content">
            <img className="mock-image-person" src={person} alt="person" />
            {` ${member.name}`}
          </div>
        );
      })}
    </div>
  );
}
