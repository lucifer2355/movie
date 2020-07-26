import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

import MenuItem from "../components/MenuItem";

const Wrapper = styled.div``;

const Heading = styled.h2``;

const LinkWrap = styled(Link)``;

function Sidebar({ genres, staticCategories, selected }) {
  return (
    <StickyBox>
      <Wrapper>
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
