import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../features/products/productSlice";
import StyledSpinner from "../ui/Spinner";
import { styled } from "styled-components";
import Button from "../ui/Button";
import {
  addToCart,
  loadCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import StarRating from "../ui/StarRating";
import useTitle from "../hooks/useTitle";

const StyledProduct = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--color-grey-300);
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 40px 0px;
`;

const InnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  Button:first-child {
    margin-right: 20px;
  }
`;

const Img = styled.img`
  width: 300px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const BestSeller = styled.span`
  position: absolute;
  background-color: var(--color-warning-500);
  padding: 2px 10px;
  font-size: 14px;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  color: var(--color-grey-200);
  font-weight: 600;
`;

function ProductDetails() {
  const params = useParams();
  const { product, isLoading } = useSelector((store) => store.products);

  useTitle(product.name);

  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getProduct(params.id));
      // dispatch(loadCart());
    },
    [dispatch, params.id]
  );

  function handleAdd() {
    dispatch(addToCart(product));
  }

  function handleRemove() {
    dispatch(removeFromCart(product));
  }

  const productInCart = cartItems?.find((item) => item.id === product.id);

  if (isLoading) return <StyledSpinner />;

  return (
    <StyledProduct>
      {product.best_seller && <BestSeller>Best Seller</BestSeller>}
      <Img
        src={`${process.env.REACT_APP_HOST}/${product.image}`}
        alt={product.name}
      />
      {/* <Img src={product.image} alt={product.name} /> */}

      <InnerInfo>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <StarRating rating={product.rating} />

        <Price>${product.price}</Price>

        <div>
          {productInCart ? (
            <Button onClick={handleRemove} variation="danger">
              Remove
            </Button>
          ) : (
            <Button onClick={handleAdd}>Add to cart</Button>
          )}

          {/* <Button variation="warning">Buy now</Button> */}
        </div>
      </InnerInfo>
    </StyledProduct>
  );
}

export default ProductDetails;
