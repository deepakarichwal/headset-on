import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { queryProducts } from "../features/products/productSlice";
import ProductCard from "../ui/ProductCard";
import { styled } from "styled-components";
import Spinner from "../ui/Spinner";
import useTitle from "../hooks/useTitle";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Search() {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const dispatch = useDispatch();

  useTitle("Search");
  useEffect(
    function () {
      dispatch(queryProducts(queryTerm));
    },
    [dispatch, queryTerm]
  );

  const { productList, isLoading } = useSelector((store) => store.products);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      )}
    </div>
  );
}

export default Search;
