import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLoggedOut = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  position: absolute;
  right: 0;
  z-index: 999;
  width: 150px;
  padding: 15px 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-grey-300);
`;

const LoggedOutLink = styled(Link)`
  font-size: 16px;
  color: var(--color-grey-800);
  font-weight: 500;
`;

const Email = styled.p`
  font-size: 14px;
  color: var(--color-grey-800);
  font-weight: 500;
`;

function DropDownLoggedIn({ close }) {
  // const ref = useRef();

  // useEffect(
  //   function () {
  //     function handleClick(e) {
  //       if (ref.current && !ref.current.contains(e.target)) close();
  //     }

  //     document.addEventListener("click", handleClick, true);

  //     return () => document.removeEventListener("click", handleClick, true);
  //   },
  //   [close, isOpen]
  // );

  function handleLogOut() {
    close();
    sessionStorage.clear();
    toast.success("You have logged out");
  }

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <StyledLoggedOut>
      <Email title={user.email}>
        {user.email.slice(0, 3)}...
        {user.email.slice(-10)}
      </Email>
      <LoggedOutLink to="/products" onClick={() => close()}>
        All Products
      </LoggedOutLink>

      <LoggedOutLink to="/dashboard" onClick={() => close()}>
        Dashboard
      </LoggedOutLink>

      <LoggedOutLink to="/" onClick={handleLogOut}>
        Log out
      </LoggedOutLink>
    </StyledLoggedOut>
  );
}

export default DropDownLoggedIn;
