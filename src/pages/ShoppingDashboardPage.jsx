import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";
import { Layout } from "../templates/Layout";

export const ShoppingDashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Layout></Layout>
    </>
  );
};
