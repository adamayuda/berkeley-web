import { NavBottom } from ".";
import { render } from "@testing-library/react";

describe("src/components/navBottom/index.tsx", () => {
  test("Render NavBottom component", () => {
    const renderedNavBottom = render(<NavBottom />);
    expect(renderedNavBottom.container).toMatchSnapshot();
  });
});
