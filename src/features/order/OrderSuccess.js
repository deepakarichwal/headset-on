import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledSuccessOrder = styled.div`
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

const SuccessIcon = styled(HiOutlineCheckBadge)`
  color: var(--color-success-500);
  font-size: 4rem;
`;

function OrderSuccess() {
  const {
    state: { data },
  } = useLocation();

  return (
    <StyledSuccessOrder>
      <SuccessIcon />
      <p>
        Thank you {data.user.name} for shopping with us!
        <br />
        Your Order ID: {data.id}
      </p>

      <p>
        Your order is confirmed. <br />
        Please check your mail ({data.user.email}) for the order.
      </p>

      <p>Payment ID: xyz_{Math.trunc(Math.random() * 900000) + 100000}</p>
      <Link to="/products">
        <Button size="medium">Continue Shopping</Button>
      </Link>
    </StyledSuccessOrder>
  );
}

export default OrderSuccess;
