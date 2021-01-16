import { combineReducers } from "redux";
import { device } from "./device";
import { posts } from "./posts";
import { user } from "./user";

export const mainReducer = combineReducers({
  device,
  user,
  posts,
});
