import { PostState, posts } from ".";

describe("src/redux/reducers/posts/index.ts", () => {
  test("update state when calling settings with action type UPDATE_POSTS", () => {
    const settingsState = posts(undefined, {
      type: "UPDATE_POSTS",
      payload: {
        _id: "id",
        user: {
          picture: "/dsad",
          username: "its me",
        },
        likes: 0,
        createdAt: new Date(),
      },
    });
    expect(settingsState).toMatchObject<PostState>({
      _id: "id",
      user: {
        picture: "/dsad",
        username: "its me",
      },
      likes: 0,
      createdAt: new Date(),
    });
  });
});
