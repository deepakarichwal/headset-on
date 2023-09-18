import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const StyledEmptyCart = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid var(--color-grey-300);
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CartIcon = styled(HiOutlineShoppingCart)`
  color: var(--color-brand-500);
  font-size: 4rem;
`;

function EmptyCart() {
  return (
    <StyledEmptyCart>
      <CartIcon />
      <p>
        Oops! Your cart looks empty 😟 <br /> Add products to your cart from our
        collections.
      </p>
      <Link to="/products">
        <Button size="medium">Continue Shopping</Button>
      </Link>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
