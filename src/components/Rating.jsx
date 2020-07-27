import React from "react";
import styled from "styled-components";
import Stars from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarsWrapper = styled(Stars)`
  line-height: 1;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: inherit;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-right: 10px;

  @media ${(props) => props.theme.mediaQueries.smaller} {
    margin-right: 5px;
  }
`;

function Rating({ number }) {
  return (
    <StarsWrapper
      emptySymbol={<FontAwesomeIcon icon={["far", "star"]} size='lg' />}
      fullSymbol={<FontAwesomeIcon icon={["fas", "star"]} />}
      initialRating={number}
      readonly
    />
  );
}

export default Rating;
