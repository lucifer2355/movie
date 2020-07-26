import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledItem = styled.div``;

function renderIcon(title) {
  switch (title) {
    case "Popular":
      return "heart";
    case "Top Rated":
      return "poll";
    case "Upcoming":
      return "calendar";
    default:
      return "dot-circle";
  }
}

function MenuItem({ title, selected }) {
  return (
    <StyledItem selected={selected}>
      <FontAwesomeIcon
        icon={renderIcon(title)}
        size='1x'
        style={{ marginRight: "10px" }}
      />
      {title}
    </StyledItem>
  );
}

export default MenuItem;
