import "src/components/post/style.sass";

import React, { FC } from "react";
import { PostState } from "src/redux/reducers/posts";
import PropTypes from "prop-types";
import bookmark from "src/assets/svg/bookmark.svg";
import comment from "src/assets/svg/comment.svg";
import heart from "src/assets/svg/heart.svg";
import send from "src/assets/svg/send.svg";

interface IPostProps {
  post: PostState;
}

export const Post: FC<IPostProps> = ({ post }) => {
  return (
    <div className="post">
      <div className="user">
        <img src={post.user.picture} alt="" />
        <strong>{post.user.username}</strong>
      </div>
      <img src={post.photo} className="photo" alt="" />
      <div className="postContent">
        <div className="actions">
          <div>
            <img src={heart} alt="LinkedTeam" />
            <img src={comment} alt="LinkedTeam" />
            <img src={send} alt="LinkedTeam" />
          </div>
          <img src={bookmark} alt="LinkedTeam" />
        </div>
        <div className="likes">
          <strong>{post.likes} likes</strong>
        </div>
        <div className="comments">
          {post?.comments?.map((comment, index) => {
            return (
              <div key={`route-${index}`} className="comment">
                <div>
                  <strong>{comment.username}</strong>
                  <span>{comment.content}</span>
                </div>
                <img src={heart} alt="LinkedTeam" />
              </div>
            );
          })}
        </div>
      </div>
      {/*<div className="createdAt">{post.createdAt}</div>*/}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.any,
};
