import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import ScrollToTop from "./utils/ScrollToTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styled from "styled-components";
import ProtectedRoute from "./pages/ProtectedRoute";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="/" />} /> */}

            <Route index path="/" element={<HomePage />} />

            <Route path="products" element={<Products />} />

            <Route path="product/:id" element={<ProductDetails />} />

            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="order-summary"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />

            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />

            <Route path="search" element={<Search />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontStyle: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-200)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </StyledApp>
  );
}

export default App;
