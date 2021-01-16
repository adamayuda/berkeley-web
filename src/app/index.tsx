import "./style.sass";

import React, { FC, Suspense, lazy, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Loading } from "src/components/loading";
import { StateInterface } from "src/redux";
import { fetchPosts } from "src/redux/actions";

const routes = [
  {
    import: import("src/pages/home"),
    path: "/",
    exact: true,
  },
];

export const App: FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);
  const dispatch = useDispatch();

  const DEVICE_SCREEN_SIZE = 975;

  const onResize = () => {
    if (
      window.innerWidth <= DEVICE_SCREEN_SIZE &&
      state.device.type === "laptop"
    )
      dispatch({
        type: "UPDATE_DEVICE_TYPE",
        payload: { type: "mobile" },
      });
    else if (
      window.innerWidth > DEVICE_SCREEN_SIZE &&
      state.device.type === "mobile"
    ) {
      dispatch({
        type: "UPDATE_DEVICE_TYPE",
        payload: { type: "laptop" },
      });
    }
  };

  useEffect(() => {
    onResize();
    dispatch(fetchPosts());
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route, index: number) => (
          <Route
            {...route}
            key={`route-${index}`}
            component={lazy(() => route.import)}
          />
        ))}
      </Switch>
    </Suspense>
  );
};
