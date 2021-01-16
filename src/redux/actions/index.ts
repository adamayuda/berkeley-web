import { Dispatch } from "redux";
import axios from "axios";
import { mainStore } from "src/redux/index";

export const fetchPosts = () => async (
  dispatch: Dispatch,
  getState: typeof mainStore.getState,
) => {
  const { data: authInfo } = await axios.post<{
    user: {
      username: string;
      picture: string;
    };
    token: string;
  }>(
    "https://berkeley.cashcashbangbang.com/auth/login",
    {
      username: "berkeley",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const {
    user: { username, picture },
    token,
  } = authInfo;
  dispatch({
    type: "UPDATE_USER_INFO",
    payload: { username, picture, token },
  });

  const { data: posts } = await axios.get<{
    posts: [{ likes: number; _id: string; user: string; createdAt: Date }];
  }>("https://berkeley.cashcashbangbang.com/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().user.token}`,
    },
  });

  dispatch({
    type: "UPDATE_POSTS",
    payload: posts,
  });
};
