import SelectAnswer from "../../components/Select";
import { useForm } from "react-hook-form";
import { selectFields } from "./options";
import { addAndComputeParents } from "../../logic/formGroup";
import { Graph } from "../../logic/graph";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const [graph, setGraph] = useState([]);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const computedGraph = addAndComputeParents(data);
    const graphController = new Graph(computedGraph);
    const heterogeneousGroups = graphController.getHeterogeneousGroups();
    // save in state
    setGraph(computedGraph);
    setGroups(heterogeneousGroups);
    reset();
  };
  const computeGraph = () => {
    if (groups.length) {
      console.log("groups", groups);
      navigate("/groups");
    } else {
      alert("Nenhum grupo foi formado ainda");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-header">
        <p className="title-form">
          Formulário de cadastro - Team Based Learning
        </p>
        <button
          to={`/groups`}
          className="btn btn-outline-info compute-button"
          onClick={computeGraph}
        >
          Grupos
        </button>
      </div>

      <div className="alert alert-warning" role="alert">
        {`Grupos formados: ${groups.length}`}
      </div>

      <div className="form-content">
        <label className="label-field">Qual seu nome ?</label>
        {errors.name && (
          <span className="error-field"> O campo é obrigatório</span>
        )}
        <input
          className="input-field"
          {...register("name", { required: true })}
          placeholder="Seu nome"
        />
        {selectFields.map(({ title, name, options, placeholder }) => {
          return (
            <SelectAnswer
              key={name}
              title={title}
              control={control}
              name={name}
              options={options}
              placeholder={placeholder}
            />
          );
        })}
      </div>
      <button className="btn btn-outline-success submit-button" type="submit">
        Enviar
      </button>
    </form>
  );
}
