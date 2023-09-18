import RegisterLayout from "../features/user/RegisterLayout";
import useTitle from "../hooks/useTitle";

function Register() {
  useTitle("Register");
  return <RegisterLayout />;
}

export default Register;
