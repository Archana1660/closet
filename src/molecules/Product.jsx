import React from "react";
import styled from "styled-components";
import { getProductOption } from "../utils/getProductOption";
import { Colors } from "../utils/Colors";
import { pricingOptionList } from "../utils/enumPricingOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const StyledImage = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;

const StyledProductionSection = styled.section`
  display: flex;
  justify-content: space-between;
  color: ${Colors.TEXT_COLOR};
  margin-bottom: 1rem;
`;

export const Product = ({ product }) => {
  return (
    <section>
      <StyledImage alt="" src={product.imagePath} />
      <StyledProductionSection>
        <div>
          <p>{product.title}</p>
          <p>{product.creator}</p>
        </div>
        {product.pricingOption === pricingOptionList.PAID.value ? (
          <p>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {product.price}
          </p>
        ) : (
          <p>{getProductOption(product)[0]?.label}</p>
        )}
      </StyledProductionSection>
    </section>
  );
};
