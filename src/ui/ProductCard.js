import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import Button from "./Button";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { HiOutlineTrash } from "react-icons/hi2";

const StyledCard = styled.div`
  max-width: 350px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-grey-300);
  position: relative;

  &.in-stock {
    filter: grayscale(1);
    pointer-events: none;
  }
`;

const StyledLink = styled(Link)`
  /* position: relative; */
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

const Img = styled.img`
  width: 100%;
`;

const Info = styled.div`
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 17px;
  font-weight: 500;
`;

const Overview = styled.p`
  margin: 10px auto;
`;

const InnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const Stock = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const TrashIcon = styled(HiOutlineTrash)`
  font-size: 16px;
  margin-bottom: -3px;
  stroke-width: 2px;
`;

function ProductCard({ product }) {
  const { id, name, overview, rating, price, image, in_stock, best_seller } =
    product;

  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
  }

  function handleRemove() {
    dispatch(removeFromCart(product));
  }

  const productInCart = cartItems?.find((item) => item.id === id);

  return (
    <>
      <StyledCard className={in_stock ? "" : "in-stock"}>
        <StyledLink to={`/product/${id}`}>
          {best_seller && <BestSeller>Best Seller</BestSeller>}
          <Img src={image} alt="" />
        </StyledLink>

        <Info>
          <Heading>{name}</Heading>
          <Overview>{overview}</Overview>
          <StarRating rating={rating} />
          <InnerInfo>
            {!in_stock ? (
              <Stock>Out of stock</Stock>
            ) : (
              <>
                <Price>${price}</Price>

                {productInCart ? (
                  <Button onClick={handleRemove} variation="danger">
                    Remove <TrashIcon />
                  </Button>
                ) : (
                  <Button onClick={handleAdd}>Add to cart +</Button>
                )}
              </>
            )}
          </InnerInfo>
        </Info>
      </StyledCard>
    </>
  );
}

export default ProductCard;
