import { DeviceState, device } from ".";

describe("src/redux/reducers/user/index.ts", () => {
  test("update state when calling settings with action type UPDATE_USER_INFO", () => {
    const settingsState = device(undefined, {
      type: "UPDATE_USER_INFO",
      payload: {
        type: "mobile",
      },
    });
    expect(settingsState).toMatchObject<DeviceState>({
      type: "mobile",
    });
  });
});
