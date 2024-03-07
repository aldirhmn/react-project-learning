import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
