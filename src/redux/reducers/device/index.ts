import { Action } from "src/redux";

export type DeviceType = "mobile" | "laptop";

export interface DeviceState {
  type: DeviceType;
}

export const device = (
  state: DeviceState = {
    type: "mobile",
  },
  action: Action<DeviceState>,
) => {
  switch (action.type) {
    case "UPDATE_DEVICE_TYPE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
