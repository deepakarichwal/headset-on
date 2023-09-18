import LoginLayout from "../features/user/LoginLayout";
import useTitle from "../hooks/useTitle";

function Login() {
  useTitle("Login");
  return <LoginLayout />;
}

export default Login;
