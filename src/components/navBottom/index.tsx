import "src/components/navBottom/style.sass";

import React, { FC } from "react";
import add from "src/assets/svg/add.svg";
import heart from "src/assets/svg/heart.svg";
import home from "src/assets/svg/home.svg";
import loupe from "src/assets/svg/loupe.svg";

export const NavBottom: FC = () => {
  return (
    <div className="navBottom">
      <div className="navGrid">
        <img src={home} alt="LinkedTeam" />
        <img src={loupe} alt="LinkedTeam" />
        <img src={add} alt="LinkedTeam" />
        <img src={heart} alt="LinkedTeam" />
        <img src={heart} alt="LinkedTeam" />
      </div>
    </div>
  );
};
