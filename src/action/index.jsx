import * as TYPES from "./type";
import tmdbAPI from "../api/tmdb";
import history from "../history";

export const init = () => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch();
  await dispatch();
  dispatch({ type: TYPES.REMOVE_LOADING });
};

export const getConfig = () => async (dispatch) => {
  const res = await tmdbAPI.get("/configuration");
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data,
  });
};
