import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBasketItem {
  id: string;
  qty: number;
  image: string;
  title: string;
  price: number;
}

export interface IBasketState {
  [id: string]: IBasketItem;
}

export interface IAction {
  type: string;
  payload: IBasketItem;
}

const initialState: IBasketState = {};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    updateBasket: (state, action: IAction) => {
      const isBasketEmpty = Object.keys(state).length === 0;
      const qtyChange = action.payload.qty;

      const targetProductId = action.payload.id;
      const { qty, image, title, price } = action.payload;

      // if not in basket - add to basket
      if (state[targetProductId] === undefined && qtyChange === 1) {
        state[targetProductId] = {
          id: targetProductId,
          qty: 1,
          image: image,
          title: title,
          price: price,
        };
        return;
      }

      // Remove from basket
      if (state[targetProductId].qty === 1 && qtyChange === -1) {
        delete state[targetProductId];
        return state;
      }

      // Handle qty change
      state[targetProductId].qty += qtyChange;
    },
  },
});

export const { updateBasket } = basket.actions;
export default basket.reducer;
