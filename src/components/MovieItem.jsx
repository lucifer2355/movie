import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import NothingSvg from "../svg/nothing.svg";
import Rating from "./Rating";
import Loading from "./Loading";

const MovieWrapper = styled(Link)``;

const ImgLoading = styled.div``;

const MovieImg = styled.img``;

const Title = styled.h2``;

const DetailsWrapper = styled.div``;

const RatingsWrapper = styled.div``;

const Tooltip = styled.span``;

function MovieItem({ movie, baseUrl }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <LazyLoad>
      <MovieWrapper to={`${process.env.PUBLIC_URL}/movie/${movie.id}`}>
        {!loaded ? (
          <ImgLoading>
            <Loading />
          </ImgLoading>
        ) : null}
        <MovieImg
          error={error ? 1 : 0}
          onLoad={() => setLoaded(true)}
          style={!loaded ? { display: "none" } : {}}
          src={`${baseUrl}w342${movie.poster_path}`}
          onError={(e) => {
            setError(true);
            if (e.target.src !== `${NothingSvg}`) {
              e.target.src = `${NothingSvg}`;
            }
          }}
        />
        <DetailsWrapper>
          <Title>{movie.title}</Title>
          <RatingsWrapper>
            <Rating number={movie.vote_average / 2} />
            <Tooltip>
              {movie.vote_average} average rating on {movie.vote_count} votes
            </Tooltip>
          </RatingsWrapper>
        </DetailsWrapper>
      </MovieWrapper>
    </LazyLoad>
  );
}

export default MovieItem;
