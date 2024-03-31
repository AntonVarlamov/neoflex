import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type DeviceInfo = {
  img: string;
  rate: number;
  price: number;
  tittle: string;
  count: number;
  id: string;
};

type ToCartSlice = {
  sum: number;
  length: number;
  devices: {
    [key: string]: DeviceInfo;
  };
};
const initialState: ToCartSlice = {
  devices: {},
  sum: 0,
  length: 0,
};

export const toCartSlice = createSlice({
  name: "toCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<DeviceInfo, "count">>) => {
      const { id } = action.payload;
      if (id in state.devices) {
        state.devices[id].count++;
      } else {
        state.devices[id] = { ...action.payload, count: 1 };
        state.length++;
      }
      state.sum += action.payload.price;
    },
    increase(state, action: PayloadAction<string>) {
      const device = state.devices[action.payload];
      device.count++;
      state.sum += device.price;
    },
    decrease(state, action: PayloadAction<string>) {
      const device = state.devices[action.payload];
      if (device.count === 1) {
        state.sum -= device.price;
        delete state.devices[action.payload];
        state.length--;
      } else {
        device.count--;
        state.sum -= device.price;
      }
    },
    deleteDevice(state, action: PayloadAction<string>) {
      const device = state.devices[action.payload];
      state.sum -= device.price * device.count;
      delete state.devices[action.payload];
      state.length--;
    }
  },
});

export const { addToCart, increase, decrease, deleteDevice } = toCartSlice.actions;
export const selectToCart = (state: RootState) => state.toCart;
