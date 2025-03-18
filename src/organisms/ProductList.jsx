import React from "react";
import { Product } from "../molecules/Product";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
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
