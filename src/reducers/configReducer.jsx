import * as TYPES from "../actions/type";

const initalState = {
  staticCategories: ["Popular", "Top Rated", "Upcoming"],
  loading: true,
};

export default (state = initalState, action) => {
  switch (type.action) {
    case TYPES.GET_CONFIG:
      return { ...state, base: action.payload };
    case TYPES.GET_GENRES:
      return { ...state, ...action.payload };
    case TYPES.SET_LOADING:
      return { ...state, loading: true };
    case TYPES.REMOVE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
