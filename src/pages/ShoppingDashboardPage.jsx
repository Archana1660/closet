import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../redux/slice/ProductStoreSlice";

export const ShoppingDashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>TEST</div>
    </>
  );
};
