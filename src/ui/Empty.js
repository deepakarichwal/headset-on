import { styled } from "styled-components";

const StyledEmpty = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid var(--color-grey-300);
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function Empty({ children }) {
  return <StyledEmpty>{children}</StyledEmpty>;
}

export default Empty;
