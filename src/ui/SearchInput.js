import { useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Form = styled.form`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-grey-200);
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  z-index: 999;
`;

const Input = styled.input`
  width: 35rem;
  border: 2px solid var(--color-grey-400);
  padding: 15px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 600;

  &:focus {
    outline: 3px solid var(--color-brand-500);
    border-color: transparent;
  }
`;

const Overlay = styled.div`
  backdrop-filter: blur(2px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.01);
`;

const SearchIcon = styled(HiOutlineMagnifyingGlass)`
  color: var(--color-grey-900);
`;

function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    setShowSearch(false);

    if (!queryTerm) return navigate(`/products`);

    return navigate(`/search?q=${queryTerm}`);
  }

  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setShowSearch();
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span>
        <SearchIcon
          onClick={() => setShowSearch((show) => !show)}
          style={{ cursor: "pointer" }}
        />
      </span>
      {showSearch && (
        <Overlay>
          <div ref={ref}>
            <Form onSubmit={handleSearch}>
              <Input
                type="search"
                name="search"
                placeholder="Search product..."
              />
            </Form>
          </div>
        </Overlay>
      )}
    </>
  );
}

export default Search;
