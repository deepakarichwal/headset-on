import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  border-top: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-200);
  text-align: center;
  margin-top: auto;
`;

function Footer() {
  return (
    <StyledFooter>
      <span>&copy;</span> 2023 Headset ON. All Rights Reserved.
    </StyledFooter>
  );
}

export default Footer;
