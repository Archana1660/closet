import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CheckboxInput } from "../atoms/CheckboxInput/CheckboxInput";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";
import { SearchInput } from "../atoms/SearchInput/SearchInput";
import { ResetButton } from "../atoms/ResetButton/ResetButton";

import { pricingOption } from "../utils/enumPricingOption";

const StyledSection = styled.section`
  /* padding: 1rem; */
`;

export const ShoppingDashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <StyledSection>
        <SearchInput />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CheckboxInput pricingOption={pricingOption} />
          <ResetButton buttonText="Reset" />
        </div>
      </StyledSection>
    </>
  );
};
