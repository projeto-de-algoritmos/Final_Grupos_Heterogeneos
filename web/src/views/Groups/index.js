import "./styles.scss";
import GroupCard from "../../components/GroupCard";
import { saved } from "../../logic/graph";
import { Link } from "react-router-dom";

export default function Groups(groups) {
  return (
    <div className="groups-container">
      <div className="label-groups">
        <h5 className="header-group">Grupo de maior chance de sucesso</h5>
        <label className="description-group">
          Esse é o grupo mais heterogeneo
        </label>
      </div>

      <Link className="group-content" to={`/view/${0}`}>
        <GroupCard group={saved[0]} />
      </Link>

      <div className="label-groups">
        <h5 className="header-group">Demais Grupos</h5>
        <label className="description-group">
          Os Grupos abaixo estão ordenados de acordo com a chance de sucesso
          (Mais heterogeneo para menos heterogeneo)
        </label>
      </div>
      {saved.slice(1, saved.length).map((group, index) => {
        return (
          <Link className="group-content" to={`/view/${index + 1}`} key={index}>
            <GroupCard group={group} key={index} />
          </Link>
        );
      })}
    </div>
  );
}
