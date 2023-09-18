import { HiOutlineUserCircle } from "react-icons/hi2";
import styled from "styled-components";
import DropDownLoggedOut from "./DropDownLoggedOut";
import DropDownLoggedIn from "./DropDownLoggedIn";
import { useState } from "react";

const StyledUserToggle = styled.div`
  position: relative;
`;

const UserIcon = styled(HiOutlineUserCircle)`
  color: var(--color-grey-900);
`;

function UserToggle() {
  const [isOpen, close] = useState(false);

  const token = sessionStorage.getItem("token");

  return (
    <StyledUserToggle>
      <UserIcon
        onClick={() => close((open) => !open)}
        style={{ cursor: "pointer" }}
      />
      {isOpen &&
        (token ? (
          <DropDownLoggedIn close={close} />
        ) : (
          <DropDownLoggedOut close={close} />
        ))}
    </StyledUserToggle>
  );
}

export default UserToggle;
