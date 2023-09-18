import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledOrderedCard = styled.div`
  border: 1px solid var(--color-grey-400);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderedItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 180px 2fr 1fr;
  align-items: center;
  justify-content: space-between;
  /* border-radius: 10px; */
  border-bottom: 1px solid var(--color-grey-300);
  padding: 10px 0;

  &:last-child {
    border: none;
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
  justify-self: end;
`;

function OrderedCard({ order, order: { cartItems } }) {
  const totalAmount = cartItems.reduce((cur, acc) => cur + acc.price, 0);

  return (
    <StyledOrderedCard>
      <Header>
        <strong>Order Id: {order.id}</strong>
        <strong>Total: ${totalAmount}</strong>
      </Header>
      {cartItems.map((item) => (
        <OrderedItems>
          <Link to={`/product/${item.id}`}>
            <Img src={item.image} alt="product" />
          </Link>
          <Title>{item.name}</Title>
          <Price>${item.price}</Price>
        </OrderedItems>
      ))}
    </StyledOrderedCard>
  );
}

export default OrderedCard;
