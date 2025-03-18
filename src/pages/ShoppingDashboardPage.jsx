import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckboxInput } from "../atoms/CheckboxInput/CheckboxInput";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";
import { SearchInput } from "../atoms/SearchInput/SearchInput";
import { ResetButton } from "../atoms/ResetButton/ResetButton";

import { pricingOptionList } from "../utils/enumPricingOption";
import { ProductList } from "../organisms/ProductList";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const ShoppingDashboardPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products?.data);
  const productDataLoading = useSelector((state) => state.products?.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section>
        <SearchInput />
        <StyledSection>
          <CheckboxInput pricingOptionList={pricingOptionList} />
          <ResetButton buttonText="Reset" />
        </StyledSection>
        <ProductList
          productData={productData}
          productDataLoading={productDataLoading}
        />
      </section>
    </>
  );
};
