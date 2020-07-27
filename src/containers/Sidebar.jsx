import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

import MenuItem from "../components/MenuItem";
import Logo from "../components/Logo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25em;
  padding: 2rem;
  margin-top: 4rem;
  color: var(--color-primary-dark);
  border-right: 1px solid var(--border-color);
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0 0 1rem 1rem;
  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

const LinkWrap = styled(Link)`
  text-decoration: none;
  display: block;
  outline: none;
  margin-bottom: 0.5rem;
`;

function Sidebar({ genres, staticCategories, selected }) {
  return (
    <StickyBox>
      <Wrapper>
        <Logo />
        <Heading>Discover</Heading>
        {renderStatic(staticCategories, selected)}
        <Heading>Genres</Heading>
        {renderGenres(genres)}
      </Wrapper>
    </StickyBox>
  );
}

function renderStatic(categories, selected) {
  return categories.map((categorey, i) => (
    <LinkWrap
      to={`${process.env.PUBLIC_URL}/genres/${categorey}`}
      key={i}
      // onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        title={categorey}
        selected={categorey === selected ? true : false}
      />
    </LinkWrap>
  ));
}

function renderGenres(genres, selected) {
  console.log(selected);
  return genres.map((genre) => (
    <LinkWrap
      to={`${process.env.PUBLIC_URL}/genres/${genre.name}`}
      key={genre.id}
      // onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        // mobile={setisOpened ? 1 : 0}
        title={genre.name}
        selected={genre.name === selected ? true : false}
      />
    </LinkWrap>
  ));
}

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: geral.staticCategories,
    genres: geral.genres,
    selected: geral.selected,
  };
};

export default connect(mapStateToProps)(Sidebar);
