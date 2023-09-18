import styled from "styled-components";
import Button from "../../ui/Button";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearCart } from "./cartSlice";

const Heading = styled.h3`
  margin-bottom: 1.3rem;
  font-size: 1.1rem;
  color: var(--color-brand-500);
  font-weight: 500;
  line-height: 0;
`;

const CardIcon = styled(HiOutlineCreditCard)`
  font-size: 22px;
  margin-right: 7px;
  margin-bottom: -5px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--color-grey-400);
  width: 100%;

  &:focus {
    outline: 2px solid var(--color-brand-500);
    border-color: transparent;
  }
`;

const Inputs = styled.div`
  display: flex;
  width: 150px;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: var(--color-grey-900);
`;

const Amount = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: var(--color-brand-400);
`;

function CheckOut({ totalPrice }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const token = JSON.parse(sessionStorage.getItem("token"));
  const hsid = JSON.parse(sessionStorage.getItem("hsid"));

  useEffect(
    function () {
      async function getUser() {
        const res = await fetch(`http://localhost:8000/600/users/${hsid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUser(data);
      }

      getUser();
    },
    [hsid, token]
  );

  async function handleOrder(e) {
    e.preventDefault();

    const order = {
      cartItems,
      quantity: cartItems.length,
      user: {
        name: e.target.name.value,
        email: e.target.email.value,
        id: user.id,
      },
    };

    const res = await fetch(`${process.env.REACT_APP_HOST}/660/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });

    const data = await res.json();
    console.log(data);
    if (data.id) {
      dispatch(clearCart());
      navigate("/order-summary", { state: { data } });
    }
  }

  return (
    <>
      <Heading>
        <CardIcon />
        CARD PAYMENT
      </Heading>
      <Form onSubmit={handleOrder}>
        <FormControl>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" id="name" defaultValue={user.name} />
        </FormControl>

        <FormControl>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            name="email"
            id="email"
            defaultValue={user.email}
          />
        </FormControl>

        <FormControl>
          <Label htmlFor="cardnumber">Card Number:</Label>
          <Input type="number" id="cardnumber" defaultValue="348398582382193" />
        </FormControl>

        <FormControl>
          <Label htmlFor="expiry">Expiry Date:</Label>
          <Inputs>
            <Input
              type="number"
              id="expiry"
              placeholder="MM"
              defaultValue="03"
            />
            <Input
              type="number"
              id="expiry"
              placeholder="YY"
              defaultValue="25"
            />
          </Inputs>
        </FormControl>

        <FormControl>
          <Label htmlFor="pin">Security Code:</Label>
          <Input type="number" id="pin" defaultValue="573" />
        </FormControl>

        <Amount>${totalPrice}</Amount>
        <Button size="full">PAY NOW</Button>
      </Form>
    </>
  );
}

export default CheckOut;
