import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

const Main = styled.main`
  padding: 40px 20px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
