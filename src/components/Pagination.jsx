import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

import Button from "./Button";

const Wrapper = styled.div``;

const WrapperLink = styled(Link)``;

function Pagination({ movies }) {
  const { page, total_pages } = movies;

  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 1500,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  if (total_pages === 1) {
    return null;
  }

  if (page < total_pages && page === 1) {
    return (
      <Wrapper>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
          onClick={scrollTo}
        >
          <Button solid title={`Page ${page + 1}`} icon='arrow-right' />
        </WrapperLink>
      </Wrapper>
    );
  } else if (page < total_pages) {
    return (
      <Wrapper type='both'>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
          onClick={scrollTo}
        >
          <Button solid left title={`Page ${page - 1}`} icon='arrow-left' />
        </WrapperLink>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
          onClick={scrollTo}
        >
          <Button solid title={`Page ${page + 1}`} icon='arrow-right' />
        </WrapperLink>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper type='one'>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
          onClick={scrollTo}
        >
          <Button solid left title={`Page ${page - 1}`} icon='arrow-left' />
        </WrapperLink>
      </Wrapper>
    );
  }
}

export default Pagination;
