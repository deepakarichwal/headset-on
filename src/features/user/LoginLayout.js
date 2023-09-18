import styled from "styled-components";
import Button from "../../ui/Button";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StyledLoginLayout = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.7rem;
  color: var(--color-brand-500);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--color-grey-300);
  border-radius: 20px;
  padding: 40px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--color-grey-400);

  &:focus {
    outline: 2px solid var(--color-brand-500);
    border-color: transparent;
  }
`;

function LoginLayout() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  async function handleLogin(e) {
    e.preventDefault();

    const loginDetails = {
      email: email.current.value,
      password: password.current.value,
    };

    const res = await fetch(`${process.env.REACT_APP_HOST}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginDetails),
    });

    const data = await res.json();

    if (data.accessToken) {
      toast.success("You have logged in");
      navigate("/products");

      sessionStorage.setItem("token", JSON.stringify(data.accessToken));

      sessionStorage.setItem("hsid", JSON.stringify(data.user.id));

      sessionStorage.setItem("user", JSON.stringify(data.user));
    } else toast.error(data);
  }

  return (
    <StyledLoginLayout>
      <Heading>Login</Heading>
      <Form onSubmit={handleLogin}>
        <FormControl>
          <label htmlFor="email">Email</label>
          <Input type="text" id="email" ref={email} required />
        </FormControl>

        <FormControl>
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" ref={password} required />
        </FormControl>

        <Button size="medium">Login</Button>
      </Form>
    </StyledLoginLayout>
  );
}

export default LoginLayout;
