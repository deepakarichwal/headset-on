import { styled } from "styled-components";
import NumCart from "./NumCart";
import SearchInput from "./SearchInput";
import UserToggle from "./UserToggle";

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.5rem;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <SearchInput />
      <NumCart />
      <UserToggle />
    </StyledNavBar>
  );
}

export default NavBar;
