import React from "react";
import styled from "styled-components";

import MovieItem from "./MovieItem";

const MoviesWrapper = styled.div``;

function MoviesList({ movies, baseUrl }) {
  if (movies.results.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <MoviesWrapper>
        {movies.results.map((movie) => (
          <MovieItem movie={movie} key={movie.id} baseUrl={baseUrl} />
        ))}
      </MoviesWrapper>
      <Pagination movies={movies} />
    </React.Fragment>
  );
}

export default MoviesList;
