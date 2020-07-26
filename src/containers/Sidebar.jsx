import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

function Sidebar({ staticCategories, genres }) {
  console.log(genres);
  return (
    <StickyBox>
      <div>
        <h2>Discover</h2>
        {renderStatic(staticCategories)}
        <h2>Genres</h2>
        {/* {renderGenres(genres)} */}
      </div>
    </StickyBox>
  );
}

function renderStatic(categories, setIsOpened) {
  return categories.map((categorey, i) => (
    <Link to={`${process.env.PUBLIC_URL}/genres/${categorey}`}>
      {categorey}
    </Link>
  ));
}

// function renderGenres(genres, setIsOpened) {
//   return genres.map((genre) => <Link>{genre.name}</Link>);
// }

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: geral.staticCategories,
    genres: geral.genres,
  };
};

export default connect(mapStateToProps)(Sidebar);
