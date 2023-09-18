import React from "react";
import { styled } from "styled-components";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin: 0rem auto 6rem;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    margin: 0 auto 8rem;
    gap: 3rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1;

  h3 {
    font-size: 3rem;

    span {
      color: var(--color-brand-500);
    }
  }

  p {
    font-size: 1.2rem;
  }
`;

const Img = styled.img`
  width: 500px;
  border-radius: 1rem;
  border: 5px solid var(--color-grey-300);
  flex: 1;

  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <Info>
        <h3>
          Headset <span>ON</span>
        </h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>
        <Link to="/products">
          <Button size="large">Explore</Button>
        </Link>
      </Info>

      <Img src="assets/hero.jpg" />
    </StyledHero>
  );
}

export default Hero;
