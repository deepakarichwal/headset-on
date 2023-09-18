import styled from "styled-components";
import OrdererCard from "./OrderedCard";
import { useEffect, useState } from "react";
import EmptyDashboard from "./EmptyDashboard";

const StyledDashboardLayout = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;
const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.7rem;
  color: var(--color-brand-500);
`;
function DashboardLayout() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const hsid = JSON.parse(sessionStorage.getItem("hsid"));

  const [orders, setOrders] = useState([]);

  useEffect(
    function () {
      async function fetchOrders() {
        const res = await fetch(
          `${process.env.REACT_APP_HOST}/660/order?user.id=${hsid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setOrders(data);
      }

      fetchOrders();
    },
    [token, hsid]
  );

  return (
    <StyledDashboardLayout>
      <Heading>Dashboard</Heading>
      {orders.length === 0 && <EmptyDashboard />}

      {orders.length > 0 &&
        orders.map((order) => <OrdererCard key={order.id} order={order} />)}
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
