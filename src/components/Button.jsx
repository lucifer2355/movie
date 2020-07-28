import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.button``;

const Button = ({ title, solid, icon, left }) => {
  return (
    <StyledButton left={left ? 1 : 0} solid={solid ? 1 : 0}>
      <FontAwesomeIcon
        icon={icon}
        size='1x'
        style={left ? { marginRight: "10px" } : { marginLeft: "10px" }}
      />
      {title}
    </StyledButton>
  );
};

export default Button;
