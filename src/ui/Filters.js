import { useState } from "react";
import { HiEllipsisVertical, HiOutlineXMark } from "react-icons/hi2";
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

const FiltersHeading = styled.h3`
  border-bottom: 2px solid var(--color-grey-300);
  padding-bottom: 10px;
`;

const Ellipsis = styled(HiEllipsisVertical)`
  color: var(--color-brand-600);
  font-size: 35px;
  border: 2px solid var(--color-grey-300);
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: var(--color-grey-300);
    color: var(--color-grey-700);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const FilterOptions = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  /* background-color: var(--color-grey-200); */
  background-color: rgba(255, 255, 255, 0.7);
  border-right: 2px solid var(--color-grey-300);
  /* border-radius: 0 10px 10px 0; */
  width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 10px 20px;
  transform: translateX(-250px);
  transition: all 0.3s ease-in-out;

  &.active {
    transform: translateX(0);
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const XMark = styled(HiOutlineXMark)`
  font-size: 28px;
  position: absolute;
  right: 15px;
  top: 10px;
  border: 2px solid var(--color-grey-300);
  color: var(--color-brand-500);
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterCat = styled.div`
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const OptionsInput = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  line-height: 0;
  cursor: pointer;
`;

function Filters() {
  const [showFilter, setShowFilter] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const { productList } = useSelector((store) => store.products);

  // Sort By
  const sortBy = searchParams.get("sortBy") || "";
  function handleSortBy(e) {
    e.preventDefault();

    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  // Filtering
  const starRating = searchParams.get("starRating") || "";
  function handleRating(e) {
    e.preventDefault();
    searchParams.set("starRating", e.target.value);
    setSearchParams(searchParams);
  }

  // Other Filters
  const inStock = searchParams.get("inStock");
  function handleInStock(e) {
    searchParams.set("inStock", e.target.checked);
    setSearchParams(searchParams);
  }

  const bestSeller = searchParams.get("bestSeller");
  function handleBestSeller(e) {
    searchParams.set("bestSeller", e.target.checked);
    setSearchParams(searchParams);
  }

  return (
    <Filter>
      <NumProducts>Headsets({productList.length})</NumProducts>
      <Ellipsis onClick={() => setShowFilter((show) => !show)} />

      <FilterOptions className={showFilter && `active`}>
        <XMark onClick={() => setShowFilter((show) => !show)} />

        <FiltersHeading>FILTERS</FiltersHeading>

        <FilterCat>
          <h4>Sort By</h4>
          <Form onFocus={handleSortBy}>
            <OptionsInput>
              <Input
                type="radio"
                id="lowtohigh"
                name="price"
                value="price-asc"
                defaultChecked={sortBy === "price-asc"}
              />
              <Label htmlFor="lowtohigh">Price - Low to high</Label>
            </OptionsInput>

            <OptionsInput>
              <Input
                type="radio"
                id="hightolow"
                name="price"
                value="price-desc"
                defaultChecked={sortBy === "price-desc"}
              />
              <Label htmlFor="hightolow">Price - High to low</Label>
            </OptionsInput>
          </Form>
        </FilterCat>

        <FilterCat>
          <h4>Rating</h4>
          <Form onFocus={handleRating}>
            <OptionsInput>
              <Input
                type="radio"
                id="4star"
                name="rating"
                value="4-star"
                defaultChecked={starRating === "4-star"}
              />
              <Label htmlFor="4star">4 Star & Above</Label>
            </OptionsInput>

            <OptionsInput>
              <Input
                type="radio"
                id="3star"
                name="rating"
                value="3-star"
                defaultChecked={starRating === "3-star"}
              />
              <Label htmlFor="3star">3 Star & Above</Label>
            </OptionsInput>

            <OptionsInput>
              <Input
                type="radio"
                id="2star"
                name="rating"
                value="2-star"
                defaultChecked={starRating === "2-star"}
              />
              <Label htmlFor="2star">2 Star & Above</Label>
            </OptionsInput>

            <OptionsInput>
              <Input
                type="radio"
                id="1star"
                name="rating"
                value="1-star"
                defaultChecked={starRating === "1-star"}
              />
              <Label htmlFor="1star">1 Star & Above</Label>
            </OptionsInput>
          </Form>
        </FilterCat>

        <FilterCat>
          <h4>Other Filters</h4>
          <Form>
            <OptionsInput>
              <Input
                type="checkbox"
                id="instock"
                name="instock"
                defaultChecked={Boolean(inStock)}
                onChange={handleInStock}
              />
              <Label htmlFor="instock">INSTOCK Only</Label>
            </OptionsInput>

            <OptionsInput>
              <Input
                type="checkbox"
                id="bestseller"
                name="bestseller"
                defaultChecked={Boolean(bestSeller)}
                onChange={handleBestSeller}
              />
              <Label htmlFor="bestseller">Best Seller Only</Label>
            </OptionsInput>
          </Form>
        </FilterCat>
      </FilterOptions>
    </Filter>
  );
}

export default Filters;
