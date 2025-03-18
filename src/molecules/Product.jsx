import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../utils/Colors";
import { getProductOption } from "../utils/getProductOption";
import { pricingOptionList } from "../utils/enumPricingOption";

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

Product.prototype = {
  product: PropTypes.shape({
    creator: PropTypes.string,
    id: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.number,
    pricingOption: PropTypes.number,
    title: PropTypes.string,
  }),
};
