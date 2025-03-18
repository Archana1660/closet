import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckboxInput } from "../atoms/CheckboxInput/CheckboxInput";

import { SearchInput } from "../atoms/SearchInput/SearchInput";
import { ResetButton } from "../atoms/ResetButton/ResetButton";
import { ProductList } from "../organisms/ProductList";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";
import {
  setSearchKeyword,
  setFilterOption,
} from "../redux/slice/ProductStoreSlice";
import { selectFilteredProducts } from "../redux/selectors/selectProduct";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const ShoppingDashboardPage = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedPriceOption, setSelectedPriceOption] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchKeyword(keyword));
    dispatch(setFilterOption(selectedPriceOption));
  };

  const productDataLoading = useSelector((state) => state.products?.isLoading);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <SearchInput keyword={keyword} setKeyword={setKeyword} />
          <StyledSection>
            <CheckboxInput
              selectedPriceOption={selectedPriceOption}
              setSelectedPriceOption={setSelectedPriceOption}
            />
            <ResetButton buttonText="Reset" />
          </StyledSection>
        </form>
        <ProductList
          productData={filteredProducts}
          productDataLoading={productDataLoading}
        />
      </section>
    </>
  );
};
