import "src/pages/home/style.sass";
import { IPost, Post } from "src/components/post";
import React, { FC, useEffect, useState } from "react";
import { Nav } from "src/components/nav";
import { NavBottom } from "src/components/navBottom";
import { StateInterface } from "src/redux";
import dubai3 from "src/assets/jpg/dubai-3.jpg";
import { useSelector } from "react-redux";
import woman from "src/assets/jpg/woman.jpg";

export const Home: FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);

  const [posts, setPosts] = useState<IPost[] | null>(null);

  const fetchPosts = () => {
    fetch("http://15.188.239.43:3010/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAyZGQwNDQxMzZlMDMxZDU2OTRiNzQiLCJpYXQiOjE2MTA4MDA1MDQsImV4cCI6MTY0MjMzNjUwNH0.nZwL5sHoBCUsM0YMQhTFRhESTNiU7OvRrCyo6ZEJ9R4",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        console.error(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
    // setPosts([
    //   {
    //     user: {
    //       picture: woman,
    //       username: "Nicole Hamilton",
    //     },
    //     photo: dubai3,
    //     likes: 12,
    //     comments: [
    //       {
    //         username: "Nicole Hamilton",
    //         content: "Hello World! 🙂",
    //         createdAt: new Date(),
    //       },
    //       {
    //         username: "Adam Kenny",
    //         content: "How are you? 🥳",
    //         createdAt: new Date(),
    //       },
    //     ],
    //     createdAt: new Date(),
    //   },
    //   {
    //     user: {
    //       picture: woman,
    //       username: "Nicole Hamilton",
    //     },
    //     photo: dubai3,
    //     likes: 12,
    //     comments: [
    //       {
    //         username: "Nicole Hamilton",
    //         content: "Hello World! 🙂",
    //         createdAt: new Date(),
    //       },
    //       {
    //         username: "Adam Kenny",
    //         content: "How are you? 🥳",
    //         createdAt: new Date(),
    //       },
    //     ],
    //     createdAt: new Date(),
    //   },
    //   {
    //     user: {
    //       picture: woman,
    //       username: "Nicole Hamilton",
    //     },
    //     photo: dubai3,
    //     likes: 12,
    //     comments: [
    //       {
    //         username: "Nicole Hamilton",
    //         content: "Hello World! 🙂",
    //         createdAt: new Date(),
    //       },
    //       {
    //         username: "Adam Kenny",
    //         content: "How are you? 🥳",
    //         createdAt: new Date(),
    //       },
    //     ],
    //     createdAt: new Date(),
    //   },
    // ]);
  }, [useState]);

  return (
    <>
      <Nav />
      {state.device.type === "mobile" && <NavBottom />}
      <div className="home">
        <div className="container">
          <div className="posts">
            {posts?.map((post: IPost, index: number) => {
              return <Post key={`route-${index}`} post={post} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
