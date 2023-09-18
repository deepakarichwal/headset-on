import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const NumProducts = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Select = styled.select``;

function SortBy() {
  const { productList } = useSelector((store) => store.products);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleFilter(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Filter>
      <NumProducts>Headsets({productList.length})</NumProducts>
      <Select onChange={handleFilter} value={sortBy}>
        <option value="price-asc">Sort by price (Low first)</option>
        <option value="price-desc">Sort by price (High first)</option>
      </Select>
    </Filter>
  );
}

export default SortBy;
