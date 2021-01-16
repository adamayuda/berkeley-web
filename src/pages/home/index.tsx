import "src/pages/home/style.sass";
import React, { FC } from "react";
import { Nav } from "src/components/nav";
import { NavBottom } from "src/components/navBottom";
import { Post } from "src/components/post";
import { StateInterface } from "src/redux";
import { useSelector } from "react-redux";

export const Home: FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);

  return (
    <>
      <Nav />
      {state.device.type === "mobile" && <NavBottom />}
      <div className="home">
        <div className="container">
          <div className="posts">
            {state.posts?.map((post, index) => {
              return <Post key={`route-${index}`} post={post} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
