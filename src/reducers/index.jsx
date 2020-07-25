import { combineReducer } from "redux";
import configReducer from "./configReducer";

export default combineReducer({
  geral: configReducer,
});
