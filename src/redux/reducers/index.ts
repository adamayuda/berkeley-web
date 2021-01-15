import { combineReducers } from "redux";
import { device } from "./device";
import { user } from "./user";

export const mainReducer = combineReducers({
  device,
  user,
});
