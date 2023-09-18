import { styled } from "styled-components";

const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid var(--color-grey-300);
  margin: 0 auto;

  border-top-color: var(--color-brand-400);

  animation: rotate infinite 1s linear;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledSpinner;
