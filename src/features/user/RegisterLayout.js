import styled from "styled-components";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StyledLoginLayout = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const Heading = styled.h3`
  text-align: center;
  font-size: 1.7rem;
  color: var(--color-brand-500);
  position: relative;
  width: fit-content;
  margin: 0 auto 2rem;

  /* &::after,
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: var(--color-brand-500);
    top: 18px;
    border-radius: 10px;
  }

  &::after {
    right: -60px;
  }

  &::before {
    left: -60px;
  } */
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

function RegisterLayout() {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const authDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch(`${process.env.REACT_APP_HOST}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authDetails),
    });

    const data = await res.json();

    if (data.accessToken) {
      toast.success("You are successfully registered");
      navigate("/login");
    } else toast.error(data);
  }

  return (
    <StyledLoginLayout>
      <Heading>Register</Heading>
      <Form onSubmit={handleRegister}>
        <FormControl>
          <label htmlFor="name">Your name</label>
          <Input type="text" id="name" required />
        </FormControl>

        <FormControl>
          <label htmlFor="email">Your email</label>
          <Input type="text" id="email" required />
        </FormControl>

        <FormControl>
          <label htmlFor="password">Your password</label>
          <Input type="password" id="password" required />
        </FormControl>
        <Button size="medium" type="submit">
          Register
        </Button>
      </Form>
    </StyledLoginLayout>
  );
}

export default RegisterLayout;
