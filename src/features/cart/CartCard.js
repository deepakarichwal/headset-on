import { styled } from "styled-components";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const StyledCartCard = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  width: 100%;
  display: grid;
  grid-template-columns: 180px 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  /* border-radius: 10px; */
  border-bottom: 1px solid var(--color-grey-300);
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;

  Button {
    justify-self: end;
  }
`;

const Img = styled.img`
  width: 100px;
  border: 1px solid var(--color-grey-300);
  border-radius: 7px;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const Price = styled.span`
  font-weight: 500;
`;

const TrashIcon = styled(HiOutlineTrash)`
  font-size: 16px;
  margin-bottom: -3px;
  stroke-width: 2px;
`;

function CartCard({ product }) {
  const { name, price, image, id } = product;

  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(product));
  }

  return (
    <StyledCartCard>
      <Link to={`/product/${id}`}>
        <Img src={image} alt="product" />
      </Link>
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Button onClick={handleRemove} variation="danger">
        Remove <TrashIcon />
      </Button>
    </StyledCartCard>
  );
}

export default CartCard;
