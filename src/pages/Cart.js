import React from "react";
import CartLayout from "../features/cart/CartLayout";
import useTitle from "../hooks/useTitle";

function Cart() {
  useTitle("Cart");
  return (
    <>
      <CartLayout />
    </>
  );
}

export default Cart;
