import { styled } from "styled-components";
import ProductCard from "../../ui/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./productSlice";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Filters from "../../ui/Filters";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function HomeLayout() {
  const [searchParams] = useSearchParams();
  const { productList, isLoading } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(loadProducts());
    },
    [dispatch]
  );

  // SortBy
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = productList
    .slice()
    .sort((a, b) => (a[field] - b[field]) * modifier);

  // Rating Filter
  const starRating = searchParams.get("starRating") || "1-star";
  const [ratingField] = starRating.split("-");

  let ratedProducts;
  if (ratingField === "4")
    ratedProducts = sortedProducts.filter((products) => products.rating >= 4);

  if (ratingField === "3")
    ratedProducts = sortedProducts.filter((products) => products.rating >= 3);

  if (ratingField === "2")
    ratedProducts = sortedProducts.filter((products) => products.rating >= 2);

  if (ratingField === "1")
    ratedProducts = sortedProducts.filter((products) => products.rating >= 1);

  // In Stock
  const inStock = searchParams.get("inStock");
  let inStockProducts;

  if (inStock === "true")
    inStockProducts = ratedProducts.filter(
      (products) => products.in_stock === true
    );
  else inStockProducts = ratedProducts;

  // Best Seller
  const bestSeller = searchParams.get("bestSeller");
  let filteredProducts;

  if (bestSeller === "true")
    filteredProducts = inStockProducts.filter(
      (products) => products.best_seller === true
    );
  else filteredProducts = inStockProducts;

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Filters />
          <Container>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
        </>
      )}
    </div>
  );
}

export default HomeLayout;
