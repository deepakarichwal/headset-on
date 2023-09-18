import ProductsLayout from "../features/products/ProductsLayout";
import useTitle from "../hooks/useTitle";

function Products() {
  useTitle("Latest Collections");

  return (
    <div>
      <ProductsLayout />
    </div>
  );
}

export default Products;
