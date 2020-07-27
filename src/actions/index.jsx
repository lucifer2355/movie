import * as TYPES from "./type";
import tmdbAPI from "../api/tmdb";
import history from "../history";

export const init = () => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: TYPES.REMOVE_LOADING });
};

export const getConfig = () => async (dispatch) => {
  const res = await tmdbAPI.get(
    `/configuration?api_key=${process.env.REACT_APP_API}`
  );
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data,
  });
};

export const getGenres = () => async (dispatch) => {
  const res = await tmdbAPI.get(
    `/genre/movie/list?api_key=${process.env.REACT_APP_API}`
  );
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data,
  });
};

export const setSelectedMenu = (name) => (dispatch, getState) => {
  const { staticCategories, genres } = getState().geral;
  if (!name) {
    dispatch({ type: TYPES.REMOVE_SELECTED_MENU });
  } else if (
    staticCategories.find((category) => category === name) ||
    genres.find((genre) => genre.name === name)
  ) {
    dispatch({
      type: TYPES.SELECTED_MENU,
      payload: name,
    });
  } else {
    history.push(process.env.PUBLIC_URL + "/404");
  }
};
