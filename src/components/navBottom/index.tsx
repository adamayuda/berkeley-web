import "src/components/navBottom/style.sass";

import React, { FC } from "react";
import { StateInterface } from "src/redux";
import add from "src/assets/svg/add.svg";
import heart from "src/assets/svg/heart.svg";
import home from "src/assets/svg/home.svg";
import loupe from "src/assets/svg/loupe.svg";
import { useSelector } from "react-redux";

export const NavBottom: FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);

  return (
    <div className="navBottom">
      <div className="navGrid">
        <img src={home} alt="LinkedTeam" />
        <img src={loupe} alt="LinkedTeam" />
        <img src={add} alt="LinkedTeam" />
        <img src={heart} alt="LinkedTeam" />
        <img
          src={state.user.picture}
          alt="LinkedTeam"
          className="profilePicture"
        />
      </div>
    </div>
  );
};
