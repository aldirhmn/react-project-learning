import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = (props) => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Insert your Name here"
        name="email"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
