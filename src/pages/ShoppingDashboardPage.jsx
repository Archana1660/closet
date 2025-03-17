import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";

const StyledMain = styled.main`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  padding: 5rem 1rem 0 1rem;
`;

export const ShoppingDashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <StyledMain></StyledMain>
    </>
  );
};
