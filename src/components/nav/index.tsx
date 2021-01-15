import "src/components/nav/style.sass";

import React, { FC } from "react";
import { StateInterface } from "src/redux";
import camera from "src/assets/svg/camera.svg";
import logoSquare from "src/assets/svg/logo-square.svg";
import send from "src/assets/svg/send.svg";
import { useSelector } from "react-redux";

export const Nav: FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);

  return (
    <nav>
      <div className="container">
        {state.device.type === "mobile" && (
          <div className="navGrid">
            <img src={camera} alt="LinkedTeam" />
            <img src={logoSquare} alt="LinkedTeam" />
            <img src={send} alt="LinkedTeam" />
          </div>
        )}
        {state.device.type === "laptop" && (
          <div className="navGrid">
            <img src={logoSquare} alt="LinkedTeam" />
            <img src={logoSquare} alt="LinkedTeam" />
          </div>
        )}
      </div>
    </nav>
  );
};
