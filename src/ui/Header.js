import { styled } from "styled-components";
import NavBar from "./NavBar";
import Logo from "../ui/Logo";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-grey-300);
  /* max-width: 80rem; */
  margin: 0 auto;
  background-color: var(--color-grey-00);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
}

export default Header;
