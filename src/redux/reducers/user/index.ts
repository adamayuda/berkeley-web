import { Action } from "src/redux";

export interface UserState {
  username: string;
  picture: string;
}

export const user = (
  state: UserState = {
    username: "",
    picture: "",
  },
  action: Action<UserState>,
) => {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
