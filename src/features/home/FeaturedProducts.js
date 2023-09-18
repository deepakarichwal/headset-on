import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import ProductCard from "../../ui/ProductCard";
import { useEffect } from "react";
import { getFeatured } from "./homeSlice";
import StyledSpinner from "../../ui/Spinner";

const StyledFeatured = styled.div``;

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.7rem;
  color: var(--color-brand-500);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function FeaturedProducts() {
  const { featuredProducts, isLoading } = useSelector((store) => store.home);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getFeatured());
    },
    [dispatch]
  );

  if (isLoading) return <StyledSpinner />;

  return (
    <StyledFeatured>
      <Heading>Featured Products</Heading>
      <Container>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </StyledFeatured>
  );
}

export default FeaturedProducts;
