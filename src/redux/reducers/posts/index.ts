import { Action } from "src/redux";

export interface PostState {
  _id: string;
  user: IUser;
  photo?: string;
  likes: number;
  comments?: IComment[];
  createdAt: Date;
}

export interface IComment {
  username: string;
  content: string;
  createdAt: Date;
}

export interface IUser {
  picture: string;
  username: string;
}

export const posts = (state: PostState[] = [], action: Action<PostState>) => {
  switch (action.type) {
    case "UPDATE_POSTS":
      return action.payload as PostState[];
    default:
      return state;
  }
};
