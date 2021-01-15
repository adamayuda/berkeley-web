import { cleanup, render } from "@testing-library/react";
import { Nav } from ".";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMainStore } from "src/redux";

let mainStore = createMainStore();

describe("src/components/nav/index.tsx", () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    mainStore = createMainStore();
  });

  test("Render Nav component", () => {
    const renderedNav = render(
      <Provider store={mainStore}>
        <Router>
          <Nav />
        </Router>
      </Provider>,
    );
    expect(renderedNav.container).toMatchSnapshot();
  });

  test("Render Theme component when darkMode is false", () => {
    mainStore.dispatch({
      type: "UPDATE_DEVICE_TYPE",
      payload: { type: "laptop" },
    });

    const renderedTheme = render(
      <Provider store={mainStore}>
        <Router>
          <Nav />
        </Router>
      </Provider>,
    );
    expect(renderedTheme.container).toMatchSnapshot();
  });

  test("Render Theme component when darkMode is false", () => {
    mainStore.dispatch({
      type: "UPDATE_DEVICE_TYPE",
      payload: { type: "mobile" },
    });

    const renderedTheme = render(
      <Provider store={mainStore}>
        <Router>
          <Nav />
        </Router>
      </Provider>,
    );
    expect(renderedTheme.container).toMatchSnapshot();
  });
});
