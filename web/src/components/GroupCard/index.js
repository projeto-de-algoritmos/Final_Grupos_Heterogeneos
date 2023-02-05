import "./styles.scss";

export default function GroupCard({ group }) {
  return (
    <div className="group-card">
      {group.slice(0, 5).map((member, index) => {
        return (
          <p key={index} className="member-content">
            {member}
          </p>
        );
      })}
      {group.length > 5 && <div className="member-content">...</div>}
    </div>
  );
}
