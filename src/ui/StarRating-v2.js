import { styled } from "styled-components";

const StyledStar = styled.span`
  position: relative;
`;
const Trace = styled.span`
  opacity: 0.2;
  position: absolute;
  left: 0;
`;

function StarRating({ rating = 5 }) {
  return (
    <StyledStar>
      {Array.from({ length: rating }, () => "⭐")}

      <Trace>{Array.from({ length: 5 }, () => "⭐")}</Trace>
    </StyledStar>
  );
}

export default StarRating;
