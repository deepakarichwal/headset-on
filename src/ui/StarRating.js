import { styled } from "styled-components";

import { HiStar, HiOutlineStar } from "react-icons/hi2";

const StyledStar = styled.span`
  font-size: 20px;
  color: var(--color-warning-500);
  line-height: 0;
`;

function StarRating({ rating = 5 }) {
  let ratingArr = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArr[i] = true;
  }

  return (
    <StyledStar>
      {ratingArr.map((value, i) =>
        value ? <HiStar key={i} /> : <HiOutlineStar key={i} />
      )}
    </StyledStar>
  );
}

export default StarRating;
