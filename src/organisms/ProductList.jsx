import React from "react";
import { Product } from "../molecules/Product";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const ProductList = ({ productData, productDataLoading = true }) => {
  return (
    <StyledProductSection className="grid-container">
      {productDataLoading ? (
        <p>Loading...</p>
      ) : (
        productData?.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </StyledProductSection>
  );
};

ProductList.prototype = {
  productData: PropTypes.shape({
    creator: PropTypes.string,
    id: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.number,
    pricingOption: PropTypes.number,
    title: PropTypes.string,
  }),
};
