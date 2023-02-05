import { useForm } from "react-hook-form";
import { selectFields } from "./options";
import SelectAnswer from "../../components/Select";
import "./styles.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <p className="title-form">Formulário de cadastro - Team Based Learning</p>

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
              title={title}
              control={control}
              name={name}
              options={options}
              placeholder={placeholder}
            />
          );
        })}
      </div>
      <input className="submit-button" type="submit" />
    </form>
  );
}
