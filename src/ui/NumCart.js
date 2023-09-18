import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNumCart = styled(Link)`
  position: relative;
`;

const Num = styled.span`
  position: absolute;
  padding: 7px 5px;
  background-color: var(--color-brand-500);
  border-radius: 50%;
  color: var(--color-grey-200);
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  line-height: 1px;
  left: 10px;
`;

const CartIcon = styled(HiOutlineShoppingCart)`
  color: var(--color-grey-900);
`;

function NumCart() {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <StyledNumCart to="cart">
      <CartIcon />
      <Num>{cartItems.length}</Num>
    </StyledNumCart>
  );
}

export default NumCart;
