import { styled } from "styled-components";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import StyledSpinner from "../../ui/Spinner";
import Button from "../../ui/Button";

import CheckOut from "./CheckOut";
import ModalWindow from "../../ui/ModalWindow";
import EmptyCart from "./EmptyCart";

const StyledCartLayout = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    text-align: center;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const PlaceOrder = styled.div`
  text-align: right;
  padding: 0 10px;
`;

function CartLayout() {
  const [isOpen, close] = useState(false);
  const { cartItems, isLoading } = useSelector((store) => store.cart);

  const totalPrice = cartItems.reduce((cur, acc) => cur + acc.price, 0);

  if (isLoading) return <StyledSpinner />;

  return (
    <StyledCartLayout>
      <Container>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <h2>
              Cart: {cartItems.length} / ${totalPrice}
            </h2>

            {cartItems.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}

            <Total>
              <h3>Total Amount:</h3>
              <strong>${totalPrice}</strong>
            </Total>

            <PlaceOrder>
              <Button onClick={() => close((open) => !open)} size="medium">
                Place order
              </Button>
            </PlaceOrder>
          </>
        )}
      </Container>
      {isOpen && (
        <ModalWindow close={close}>
          <CheckOut totalPrice={totalPrice} close={close} />
        </ModalWindow>
      )}
    </StyledCartLayout>
  );
}

export default CartLayout;
