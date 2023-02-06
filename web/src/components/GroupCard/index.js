import "./styles.scss";

export default function GroupCard({ group }) {
  const groupLen = group.length;
  return (
    <div className="group-card">
      {group.slice(0, 5).map((member, index) => {
        return (
          <p key={index} className="member-content">
            {`${member.name} ${groupLen > index + 1 && index !== 4 ? "," : ""}`}
          </p>
        );
      })}
      {group.length > 5 && <div className="member-content">...</div>}
    </div>
  );
}
