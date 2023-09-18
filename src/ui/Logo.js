import { styled } from "styled-components";
import BrandLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LogoName = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-grey-900);
`;

const On = styled.span`
  color: var(--color-brand-500);
`;

const Img = styled.img`
  width: 40px;
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <Img src={BrandLogo} alt="logo" />
      <LogoName>
        Headset <On>ON</On>
      </LogoName>
    </StyledLogo>
  );
}

export default Logo;
