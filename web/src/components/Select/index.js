import "./styles.scss";
import Select from "react-select/creatable";
import { Controller } from "react-hook-form";

export default function SelectAnswer({
  options,
  title,
  name,
  control,
  placeholder,
}) {
  return (
    <>
      <label className="label-field">{title}</label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ref } }) => (
          <Select
            inputRef={ref}
            onChange={(val) => onChange(val.map((c) => c.value))}
            className="select-lang basic-multi-select"
            isMulti
            options={options}
            classNamePrefix="select"
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
}
